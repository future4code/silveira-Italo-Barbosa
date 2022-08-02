import axios from "axios"
import { Address } from "../complement/Address"
import { Request} from "express"

export const getAddress = async (cep: string, rua: string, numero: string): Promise<Address> => {
    try {

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)


        const address: Address = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf,
            rua: rua,
            numero: numero,
        }

        return address
    } catch (error) {
        throw new Error("????")
    }
}