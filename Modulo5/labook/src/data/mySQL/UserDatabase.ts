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


}

