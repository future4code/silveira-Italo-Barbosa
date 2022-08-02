
import { connection } from "./BaseDatabase";
import { user } from "../types/user";

export const insertUser = async(
   user: user
) => {
   try {
      await connection.insert({
         id: user.id,
         name: user.name,
         email: user.email,
         password: user.password,
         role: user.role
      }).into('User_Arq')
   }catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
   }
   
}