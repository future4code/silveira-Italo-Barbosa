import userOrder2 from "../data/userOrder"
import {Response, Request} from "express"


export const getUsersPage = async(request: Request,response: Response): Promise<void> =>{
    let order = String(request.query.order == "name"?"name":"type"?"type":"email");
    let sort = String(request.query.sort == "ASC"?"ASC":"ASC")
    let limit = Number(request.query.limit)
    try {
       const users = await userOrder2(order, sort, limit)
 
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