import { CustomError } from "../model/CustomError";
import { BuysModel } from "../model/BuysModel";
import { BaseDatabase } from "./BaseDatabase";

export default class BuyDatabase extends BaseDatabase{
    protected TABLE_NAME = "buys_wirecard"

    public async addBuy(input: BuysModel): Promise<void> {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.")
        }
    }

    public async getID(id: string): Promise<BuysModel> {
        try {
            const result: BuysModel[] = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({id})

            return result[0]
        } catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.")
        }
    }

    public async getEmail(email: string): Promise<BuysModel> {
        try {
            const result: BuysModel[] = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({email})

            return result[0]
        } catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.")
        }
    }
    
    public async getCpf(cpf: number): Promise<BuysModel> {
        try {
            const result: BuysModel[] = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({cpf})

            return result[0]
        } catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.")
        }
    }
}