import { Request, Response } from "express";



export default async function getUser (request: Request, response: Response):Promise<void> {
    try {
      const token = request.headers.authorization as string;
  
      const authentication = getData(token);
  
      if (authentication.role !== "normal") {
        throw new Error("Apenais usuarios podem acessar, admin ta fora da festa!");
      }
  
      const user = await getUserId(authentication.id);
  
      response.status(200).send({
        id: user.id,
        email: user.email,
        role: authentication.role
      });
    } catch (error:any) {
      response.status(400).send({
        message: error.message
      })
    }
  };