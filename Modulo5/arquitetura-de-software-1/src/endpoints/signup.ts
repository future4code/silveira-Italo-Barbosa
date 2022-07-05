import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {

     
   

     

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            //token
         })

   } catch (error:any) {
      res.status(400).send(error.message)
   }
}