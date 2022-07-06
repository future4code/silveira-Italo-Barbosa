    import { connection } from "./connection";





    export default async function userOrder (name:string, type:string):Promise<any>{
        const retorno = await connection.raw(`
        SELECT id, name, email, type
        FROM aula_exercicio
        WHERE name LIKE "%${name}%"
        ORDER BY ${name} OR ${type}
        `)
        return retorno
    }

    
  