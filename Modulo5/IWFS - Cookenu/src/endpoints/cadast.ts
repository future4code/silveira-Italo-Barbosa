import {Request, Response} from "express"
import { IdGenerator } from "../services/id"
import { UserDatabase } from "../data/UserDatabase"



export default async function cadast (request: Request, response: Response): Promise<void> {
    try {
      const userData = {
        name: request.body.email,
        email: request.body.email,
        password: request.body.password,
        role: request.body.role
      }
      const userdatabase = new UserDatabase()
      const user = userdatabase.creatUser(name, email, password)
      const idgenerate =  new IdGenerator
      const id = idgenerate.generateId()

      const hashPassword = await hash(userData.password)

      await userdatabase.creatUser(userData.name, userData.email, hashPassword, userData.role)

      const token = generateToken({
        id,
        role: userData.role
      })

      response.status(200).send({
        token
      })
    } catch (error:any) {
      response.status(400).send({
        message: error.message
      })
    }
  }; 