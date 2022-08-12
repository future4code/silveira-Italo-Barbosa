import { inputCard } from "../model/CardModel";
import { inputPayment, TypePayment } from "../model/PaymentModel";
import { Request, Response } from "express";
import PaymentBusiness from "../business/PaymentBusiness";
import CardBusiness from "../business/CardBusiness";
import BuysBusiness from "../business/BuyBusiness";


export default class PaymentController {
    constructor(
        private paymentBusiness = new PaymentBusiness(),
        private cardBusiness = new CardBusiness(),
        private buyBusiness = new BuysBusiness()
    ){}

    public createPayment = async(request: Request, response: Response) => {
        try {
            const client_id = request.params.client_id
            const buy_id = request.params.buyer_id
            const {amount, type, status, card_holder, card_number, card_expiration_date, card_cvv, boleto_number} = request.body
            
            if(type === TypePayment.CARD){
                const inputCard: inputCard = {
                    buy_id,
                    card_holder,
                    card_number,
                    card_expiration_date,
                    card_cvv
                }
                const inputPayment: inputPayment = {
                    client_id,
                    buy_id,
                    type,
                    amount,
                    status,
                }
                const result = await this.cardBusiness.addCard(inputCard, inputPayment)
                await this.paymentBusiness.createPayment(inputPayment)

                response.send(result)
            }else{
                const inputBoleto: inputPayment = {
                    client_id,
                    buy_id,
                    type,
                    amount,
                    status,
                    boleto_number
                }
                const result = await this.paymentBusiness.createPayment(inputBoleto)
                response.status(201).send({message: `Boleto number: ${result.getBoletoNumber()}`})
            }

        } catch (error: any) {
            response.status(error.statusCode || 400).send({ message: error.message })
        }
    }

    public getPaymentId = async(request: Request, response: Response) => {
        try {
            const id = request.params.payment_id
            const paymentDados = await this.paymentBusiness.getPaymentId(id)
            response.status(200).send({
                Data: paymentDados
            })
        } catch (error: any) {
            response.status(error.statusCode || 400).send({ message: error.message })
        }
    }
}