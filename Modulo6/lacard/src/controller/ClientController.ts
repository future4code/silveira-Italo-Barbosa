import { Response } from "express";
import ClientBusiness from "../business/ClientBusiness";

export default class ClientController {
    constructor(
        private clientBusiness = new ClientBusiness()
    ){}

    public addClient = async(response: Response) => {
        try {
            await this.clientBusiness.addClient()

            response.status(201).send({message: "Client created success"})
        } catch (error: any) {
            response.status(400).send(error.sqlmessage || error.message)
        }
    }
}