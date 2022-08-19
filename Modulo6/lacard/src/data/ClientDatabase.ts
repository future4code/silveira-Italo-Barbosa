import { ClientModel } from "../model/ClientModel";
import { BaseDatabase } from "./BaseDatabase";

export default class ClientDatabase extends BaseDatabase{
    protected TABLE_NAME = "client_wirecard"

    public async addClient(id: string): Promise<void> {
        try {
            await this.getConnection()
            .insert({id})
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async getID(id: string): Promise<ClientModel> {
        try {
            const result: ClientModel[] = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({id})

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}