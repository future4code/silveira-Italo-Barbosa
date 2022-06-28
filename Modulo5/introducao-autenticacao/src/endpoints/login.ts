import {getUsEmail} from "../data/getUs"
import { Request, Response } from "express";
import { generateToken } from "../serv/token";

export default async function login(request: Request, response: Response): Promise<void> {
    try {
     
      if (!request.body.email || request.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: request.body.email,
        password: request.body.password,
      };
  
  
      const user = await getUsEmail(userData.email);
  
      if (user.password !== userData.password) {
        throw new Error("Invalid password");
      }
  
      
      const token = generateToken({
        id: user.id,
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