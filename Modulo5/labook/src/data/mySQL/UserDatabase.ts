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
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }

   public captUserEmail = async(
      email: string
   ): Promise<string> => {
      try {
        const result = await UserDatabase.connection
        .select("*")
        .from(UserDatabase.table_name)
        .where({email})

        return result[0] && User.toUser(result[0])
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }

}

