import { connection } from "./BaseDatabase"
import { user } from "../types/user"

class Data{

   async insertUser(user: user){
        await connection.insert({
           id: user.id,
           name: user.name,
           email: user.email,
           password: user.password,
           role: user.role
        }).into('User_Arq')
     }
     
}

export default Data