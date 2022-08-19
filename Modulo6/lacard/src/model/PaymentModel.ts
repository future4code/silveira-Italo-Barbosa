


export enum paymentStatus {
    A_PAGAR = "A PAGAR",
    PAGO = "PAGO"
}
export enum TypePayment {
    CARD = "CARTÃO DE CRÉDITO",
    BOLETO = "BOLETO"
}
export default class PaymentModel {
    constructor(
        private id: string,
        private client_id: string,
        private buy_id: string,
        private amount: number,
        private type: TypePayment,
        private status: paymentStatus,
        private boleto_number?: number | undefined | null
    ){}

    public getId() {
        return this.id;
    }
    public getClientId() {
        return this.client_id;
    }
    public getBuyId() {
        return this.buy_id;
    }
    public getAmount() {
        return this.amount;
    }
    public getType() {
        return this.type;
    }
    public getStatus() {
        return this.status;
    }
    public getBoletoNumber() {
        return this.boleto_number;
    }
    static todoBuyModel(payment: any): PaymentModel {
        return new PaymentModel(payment.id, payment.client_id, payment.buy_id, payment.amount, payment.type, payment.status, payment.boleto_number)
    }
}


export interface inputPayment {
    client_id: string,
    buy_id: string,
    amount: number,
    type: TypePayment,
    status: paymentStatus,
    boleto_number?: number | null
}