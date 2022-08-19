import { CustomError } from "../model/CustomError";
import PaymentModel from "../model/PaymentModel";
import { BaseDatabase } from "./BaseDatabase";

export default class PaymentBaseDatabase extends BaseDatabase {
    protected TABLE_NAME = "payment_wirecard"

    public async createPayment(input: PaymentModel): Promise<void> {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.")
        }
    }

    public async getPaymentId(id: string): Promise<PaymentModel> {
        try {
            const result = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({id})
            return result[0]
        } catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.")
        }
    }
}