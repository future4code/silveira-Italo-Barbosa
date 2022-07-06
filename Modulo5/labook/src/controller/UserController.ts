import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";




export class UserController {
  constructor(
   private userBusiness: UserBusiness,
   
  ){}
  public signUp = async (request: Request, response: Response) => {
    try {
      const { name, email, password } = request.body

      

      const token = await this.userBusiness.signUp(email, name, password);

      response.status(201).send({ message: "Usuário cadastrado!", token });
    } catch (error: any) {
      response.status(400).send(error.message);
    }
  };
}
