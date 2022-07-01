import {Request, Response} from "express"
import { IdGenerator } from "../services/id"
import { UserDatabase } from "../data/UserDatabase"
import { hashMa } from "../services/Cript"
import { User } from "../data/User"
import { generateToken } from "../services/Auth"


export default async function cadast (request: Request, response: Response): Promise<void> {
    try {
      const {
        name, 
        email,
        password,
        role,
      } = request.body 
      const userdatabase = new UserDatabase()
      const user = userdatabase.findUser(email)
      const idgenerate =  new IdGenerator
      const id = idgenerate.generateId()
      const newUser = new User(id, name, email, hashPassword, role)
      const hashMan = new hashMa()
      const hashPassword = hashMan.hash(password)
      await userdatabase.creatUser(newUser)
      
      const token = generateToken({
        id,
        role: userdatabase.role
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