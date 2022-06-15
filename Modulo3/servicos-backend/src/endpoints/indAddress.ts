import { Request, Response } from "express"
import indiAddress from "../data/indiAddress"
import { getAddress } from "../services/getAddress"

export const indAddress = async (request: Request, response: Response) => {
    try {
        
        const cep = request.params.cep
        const rua = request.params.rua
        const numero = request.params.numero
        
        const address = await getAddress(cep, rua, numero)

        if(!address){
            throw new Error("inválido")
        }
        
        await indiAddress(address)

        response.status(201).send("Endereco criado")
    } catch (error:any) {
        response.status(400).send(error.message)
    }
}