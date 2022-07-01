import { BaseDatabase } from "./BaseDatabase";
import { User } from "./User";

export const Table = "User";
export class UserDatabase extends BaseDatabase{


    public async findUser(email:string):Promise<User>{

        try {
            const Us = await BaseDatabase.connection("User")
            .select("*")
            .where({email})

            return User.toUser(Us[0])
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async creatUser(user:User){
        try {
 
         await BaseDatabase.connection("User")
         .insert({
           id: user.getName,
           name: user.getName,
           email: user.getEmail,
           password: user.getPassword,
           role: user.getRole,
           
         })
         .into(Table);
        } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
        } 
     }; 



}