import { Request, Response } from "express";
import { generateId } from "../serv/id";
import { generateToken } from "../serv/token";
import {createUs} from "../data/create"


export default async function createUser(request: Request,response: Response): Promise<void> {
   try {
   
     if (!request.body.email || request.body.email.indexOf("@") === -1) {
       throw new Error("Invalid email");
     }
 
     
     if (!request.body.password || request.body.password.length < 6) {
       throw new Error("Invalid password");
     }
 
     const userData = {
       email: request.body.email,
       password: request.body.password,
     };
 
     const id = generateId();
 
   
     await createUs(id, userData.email, userData.password);
 
     const token = generateToken({
       id,
     });
 
     response.status(200).send({
       token,
     });
   } catch (error:any) {
     response.status(400).send({
       message: error.message,
     });
   }
 };
