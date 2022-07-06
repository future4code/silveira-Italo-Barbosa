import { Address } from "../complement/Address";
import { connection } from "./connection";


export default async function indiAddress(address: Address) {

    const { logradouro,bairro,cidade,estado} = address

    await connection("endereço").insert({
        logradouro,
        bairro,
        cidade,
        estado
    })

}