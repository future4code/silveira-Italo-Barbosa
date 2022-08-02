import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginType } from "../model/LoginType";
import { UserType } from "../model/UserType";




export class UserController {
  constructor(
   private userBusiness: UserBusiness,
   
  ){}
  public signUp = async (request: Request, response: Response) => {
    try {
      const { name, email, password } = request.body

      const newuser: UserType = {
        name,
        email,
        password
      }

      const token = await this.userBusiness.signUp(newuser);

      response.status(201).send({ message: "Usuário cadastrado!", token });
    } catch (error) {
      if(error instanceof Error ){
        throw new Error(error.message)
      }else{
        throw new Error("erro desconhecido")
      }
    }
  };

  public login = async (request: Request, response: Response) => {

      try {
        const {email, password} = request.body

        const user: LoginType = {
          email,
          password
        }
        
        const token = await this.userBusiness.login(user)

        response.status(200).send(token)

      } catch (error) {
        if(error instanceof Error ){
          throw new Error(error.message)
        }else{
          throw new Error("erro desconhecido")
        }
      }

  }
  
}
