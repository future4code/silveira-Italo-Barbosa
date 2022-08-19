import BuysDatabase from "../data/BuysDatabase";
import CardDatabase from "../data/CardDatabase";
import PaymentBaseDatabase from "../data/PaymentBaseDatabase";
import { CustomError } from "../model/CustomError";
import CardModel, { inputCard } from "../model/CardModel";
import PaymentModel, { inputPayment, paymentStatus } from "../model/PaymentModel";
import { IdGenerator } from "../services/id";
import { CardTrue } from "../services/CardTrue";


export default class CardBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private cardData = new CardDatabase(),
        private buyData = new BuysDatabase(),
        private paymentBaseDatabase = new PaymentBaseDatabase()
    ){}

    public addCard = async(input: inputCard, inputPay: inputPayment) => {
        const {buy_id, card_holder,card_number, card_expiration_date, card_cvv} = input
        const {client_id, type, amount} = inputPay
        let {status} = inputPay
        const [month, year] = card_expiration_date.split("/")
        const card_expirationFormat = new Date(`${year}-${month}-01`)

        if(!buy_id || !card_holder || !card_number || !card_expiration_date || !card_cvv){
            throw new CustomError(422, "empty fields")
        }

        if(!card_expiration_date.includes("/") || card_expiration_date.length !== 7){
            throw new CustomError(400, "Invalid card date")
        }

        if(card_cvv.toString().length !== 3){
            throw new CustomError(400, "Invalid CVV")
        }

        if(card_number.toString().length !== 16){
            throw new CustomError(400, "Not valid card")
        }

        const validBuy = await this.buyData.getID(buy_id)
        if(!validBuy){
            throw new CustomError(404, "error")
        }
        
        if(card_expirationFormat.getTime() < Date.now()){
            const id = this.idGenerator.generateId()
            status = paymentStatus.A_PAGAR
            const newPayment = new PaymentModel(
                id,
                client_id,
                buy_id,
                amount,
                type,
                status
            )
            await this.paymentBaseDatabase.createPayment(newPayment)
            throw new CustomError(400, "Expired card")
        }
        
        if(!CardTrue.includes(card_cvv)){
            const id = this.idGenerator.generateId()
            status = paymentStatus.A_PAGAR
            const newPayment = new PaymentModel(
                id,
                client_id,
                buy_id,
                amount,
                type,
                status
            )
            await this.paymentBaseDatabase.createPayment(newPayment)
            throw new CustomError(401, "Payment error")
        }else{

            const id = this.idGenerator.generateId()
            
            const newCard = new CardModel(
            id,
            buy_id,
            card_holder,
            card_number,
            card_expirationFormat,
            card_cvv
            )

        await this.cardData.addCard(newCard)
        return ({message: "Payment sucess"})
        }
    }
}