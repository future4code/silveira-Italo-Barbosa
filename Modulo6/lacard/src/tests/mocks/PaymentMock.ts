import PaymentModel, { paymentStatus, TypePayment } from "../../model/PaymentModel"


export const paymentMock1 = new PaymentModel(
    "id_mock",
    "italo",
    "buy_mock",
    212,
    TypePayment.BOLETO,
    paymentStatus.A_PAGAR,
    789456123
)
export const paymentMock2 = new PaymentModel(
    "id_mock2",
    "italo",
    "buy_mock2",
    995,
    TypePayment.CARD,
    paymentStatus.PAGO
)