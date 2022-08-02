import {User}  from "../../model/User";
import { BaseDatabase } from "./BaseDatabase";




export class UserDatabase extends BaseDatabase{
   private static table_name = "User"
   public signUp = async(
      user: User
   ): Promise<void> => {
      try {
         await UserDatabase.connection.insert({
            id: user.getId,
            name: user.getName,
            email: user.getEmail,
            password: user.getPassword
         }).into(UserDatabase.table_name)
         
      } catch (error) {
         if(error instanceof Error ){
            throw new Error(error.message)
          }else{
            throw new Error("erro desconhecido")
          }
      }
   
   }

   public captUserEmail = async(
      email: string
   ): Promise<any> => {
      try {
        const result = await UserDatabase.connection
        .select("*")
        .from(UserDatabase.table_name)
        .where({email})

        return result[0] && User.toUser(result[0])
         
      } catch (error) {
         if(error instanceof Error ){
            throw new Error(error.message)
          }else{
            throw new Error("erro desconhecido")
          }
      }
   
   }

}

