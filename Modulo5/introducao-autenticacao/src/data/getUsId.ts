import connection from "../connection"
import { Table } from "./create"



export default async function getUsId(id: string): Promise<any> {

    const result = await connection
      .select("*")
      .from(Table)
      .where({ id })

    return result[0]
  }
