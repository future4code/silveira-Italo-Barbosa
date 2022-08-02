import { connection } from "./connection";

export default async function userOrder2 (name:string, type:string, size:Number):Promise<any>{
    const retorno = await connection.raw(`
    SELECT id, name, email, type
    FROM aula_exercicio
    WHERE name LIKE "%${name}%"
    ORDER BY ${name} OR ${type}
    LIMIT ${size}`)
    return retorno
}