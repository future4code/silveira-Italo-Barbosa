import { Request, Response } from "express";
import connection from "../connection";
import getUsId from "../data/getUsId";
import { getData } from "../serv/token";

export default async function getUswithId(request: Request,response: Response): Promise<void> {
   try {
     const token = request.headers.authorization as string;
 
    
     const authenticationData = getData(token);
 
     const user = await getUsId(authenticationData.id);
 
     response.status(200).send({
       id: user.id,
       email: user.email,
     });
   } catch (error:any) {
     response.status(400).send({
       message: error.message,
     });
   }
 };