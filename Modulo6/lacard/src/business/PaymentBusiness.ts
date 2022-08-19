import PaymentModel, { inputPayment, paymentStatus, TypePayment } from "./../model/PaymentModel";
import PaymentBaseDatabase from "../data/PaymentBaseDatabase";
import { IdGenerator } from "../services/id";
import ClientDatabase from "../data/ClientDatabase";
import BuysDatabase from "../data/BuysDatabase";
import { CustomError } from "../model/CustomError";

export default class PaymentBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private paymentBaseDatabase = new PaymentBaseDatabase(),
        private clientBaseDatabase = new ClientDatabase(),
        private buyData = new BuysDatabase()
    ){}

    public createPayment = async(input: inputPayment) => {
        try {
            const {client_id, buy_id, amount, type} = input
            let {status, boleto_number} = input

            const validClient = await this.clientBaseDatabase.getID(client_id)
            if(!validClient){
                throw new CustomError(404, "no exist")
            }

            const validBuyer = await this.buyData.getID(buy_id)
            if(!validBuyer){
                throw new CustomError(404, "buy no exist")
            }

            if(!client_id ||  !buy_id || !amount || !type ){
                throw new CustomError(422, "empty fields")
            }
            if(type !== TypePayment.BOLETO && type !== TypePayment.CARD) {
                throw new CustomError(422, "Invalid transaction")
            }

            if(!status){
                status = paymentStatus.A_PAGAR
            }


            if(type === TypePayment.CARD){
                status = paymentStatus.PAGO
                boleto_number = null
            }

            if(type === TypePayment.BOLETO){
                boleto_number = Date.now()
            }
            
            const id = this.idGenerator.generateId()

            const newPayment = new PaymentModel(
                id,
                client_id,
                buy_id,
                amount,
                type,
                status,
                boleto_number
            )
            

            await this.paymentBaseDatabase.createPayment(newPayment)

            return newPayment
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getPaymentId = async(id: string) => {
        try {
            const result = await this.paymentBaseDatabase.getPaymentId(id)
            if(!result){
                throw new CustomError(404, "payment????")
            }
            return (result)
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}