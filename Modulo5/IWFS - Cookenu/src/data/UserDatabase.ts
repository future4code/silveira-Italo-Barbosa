import { BaseDatabase } from "./BaseDatabase";
import { User } from "./User";


export class UserDatabase extends BaseDatabase{


    public async findUser(id:string):Promise<User>{

        try {
            const Us = await BaseDatabase.connection("User")
            .select("*")
            .where({id})

            return User.toUser(Us[0])
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async creatUser(name: string, email: string, password: string):Promise<void> {
        try {
 
         await BaseDatabase.connection("User")
         .insert({
           name,
           email,
           password,
         })
         .into(Table);
        } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
        } 
     }; 



}