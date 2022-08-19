import { Request, Response } from "express";
import BuyBusiness from "../business/BuyBusiness";
import { InputAddBuy } from "../model/BuysModel";

export default class BuysController {
    constructor(
        private BuysBusiness = new BuyBusiness()
    ){}

    public addBuy = async(request: Request, response: Response) => {
        try {
            const{name, email, cpf} = request.body

            const input: InputAddBuy = {
                name,
                email,
                cpf
            }

            await this.BuysBusiness.addBuy(input)
            response.status(201).send({ message: "Buy sucess" })
        } catch (error: any) {
            response.status(error.statusCode || 400).send({ message: error.message }) 
        }
    }
}