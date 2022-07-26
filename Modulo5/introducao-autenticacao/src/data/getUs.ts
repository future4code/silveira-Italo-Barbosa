import connection from "../connection";
import { Table } from "./create";

export const getUsEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(Table)
      .where({ email });
 
    return result[0];
   }
 