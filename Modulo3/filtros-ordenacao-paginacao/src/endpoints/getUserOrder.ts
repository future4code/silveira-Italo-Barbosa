import userOrder from "../data/userOrder"
import {Response, Request} from "express"


export const getUsersOrdened = async(request: Request,response: Response): Promise<void> =>{
    let order = String(request.query.order == "name"?"name")
    let type = request.params.type
    try {
       const users = await userOrder(order, type)
 
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