import { connection } from "../data/connection"
import { Request, Response } from "express"

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula_exercicio;
    `)
 
    return result[0]
 }

export const getAllUsers = async(request: Request,response: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          response.status(400)
          throw new Error("No users found")
       }
 
       response.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       response.send(error.message || error.sqlMessage)
    }
 }


 