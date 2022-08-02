import axios from "axios"
import { Request, Response } from "express"
import { Address } from "../complement/Address"




export const getAddr = async (request: Request, response: Response) => {
    try {
        const cep = request.params.cep
    
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf,
            rua: request.params.rua,
            numero: request.params.numero
        }
        response.send(address)
    } catch (error:any) {
        response.status(400).send(error.message)
    }
}