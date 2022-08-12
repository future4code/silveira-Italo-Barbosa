
import PaymentModel from "../../model/PaymentModel";
import { paymentMock1, paymentMock2 } from "./PaymentMock";

export class PaymentBaseDatabaseMock {
    public async getPaymentId(id: string): Promise<PaymentModel | undefined> {
        switch (id) {
            case "id_mock":
                return paymentMock1
            case "id_mock2":
                return paymentMock2
            default:
                return undefined
        }
    }

    public async createPayment(input: PaymentModel): Promise<void> {
       
    }
}