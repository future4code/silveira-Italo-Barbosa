import { BaseDatabase } from "./BaseDatabase";




export const Table = "User";

	 export class createUs extends BaseDatabase{
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
	}; }