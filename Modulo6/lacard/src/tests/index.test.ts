import CardBusiness from "../business/CardBusiness"
import PaymentBusiness from "../business/PaymentBusiness"
import { inputCard } from "../model/CardModel"
import { inputPayment, paymentStatus, TypePayment } from "../model/PaymentModel"
import { BuyerDatabaseMock } from "./mocks/BuyBaseDatabase"
import { CardDatabaseMock } from "./mocks/CardBaseDatabase"
import { ClientDataMock } from "./mocks/ClientBaseDatabase"
import { IdGeneratorMock } from "./mocks/IdGenerator"
import { PaymentBaseDatabaseMock } from "./mocks/PaymentBaseDatabaseMock"



const paymentBusinessMock = new PaymentBusiness(
    new IdGeneratorMock,
    new PaymentBaseDatabaseMock as any,
    new ClientDataMock as any,
    new BuyerDatabaseMock as any
)

const cardBusinessMock = new CardBusiness(
    new IdGeneratorMock,
    new CardDatabaseMock as any,
    new BuyerDatabaseMock as any,
    new PaymentBaseDatabaseMock as any
)


describe("Payment tests", () => {
    test("Test getId, not found", async () => {
        expect.assertions(1)
        try {
            await paymentBusinessMock.getPaymentId("test")
        } catch (error: any) {
            expect(error.message).toBe("payment????")
        }
    })
    test("Test createPayment, client no exist", async() => {
        expect.assertions(1)
        try {
            const client: inputPayment = {
                client_id: "",
                buy_id: "buy_id",
                amount: 959,
                type: TypePayment.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 959959959
            }
            await paymentBusinessMock.createPayment(client)
        } catch (error: any) {
            expect(error.message).toBe("no exist")
        }
    })
    test("Test createPayment, buy no exist", async() => {
        expect.assertions(1)
        try {
            const client: inputPayment = {
                client_id: "id_mock",
                buy_id: "",
                amount: 231,
                type: TypePayment.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 959959959
            }
            await paymentBusinessMock.createPayment(client)
        } catch (error: any) {
            expect(error.message).toBe("buy no exist")
        }
    })
    test("Test addCard invalid cvv", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buy_id: "id_mock1",
                card_holder: "",
                card_number: 959959959959959,
                card_expiration_date: "12/2022",
                card_cvv: 9595
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buy_id: "id_mock1",
                amount: 150,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Invalid CVV")
        }
    })
    test("Test addCard, invalid format", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buy_id: "id_mock1",
                card_holder: "",
                card_number: 959,
                card_expiration_date: "12/2022",
                card_cvv: 959
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buy_id: "id_mock1",
                amount: 456,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Not valid card")
        }
    })
    test("Test addCard, expired card", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buy_id: "id_mock1",
                card_holder: "holder name",
                card_number: 959959959959959,
                card_expiration_date: "02/2020",
                card_cvv: 123
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buy_id: "id_mock1",
                amount: 150,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Payment error")
        }
    })
    test("Test addCard, not authorized", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buy_id: "id_mock1",
                card_holder: "holder name",
                card_number: 959959959959959,
                card_expiration_date: "12/2022",
                card_cvv: 122
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buy_id: "id_mock1",
                amount: 150,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Payment error")
        }
    })
    test("Test create Payment, invalid fields", async() => {
        expect.assertions(1)
        try {
            const client: inputPayment  = {
                client_id: "id_mock",
                buy_id: "id_mock1",
                amount: 456,
                type: TypePayment.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 959959959
            }
            await paymentBusinessMock.createPayment(client)
        } catch (error: any) {
            expect(error.message).toBe("empty fields")
        }
    })
})

describe("Card tests", () => {
    test("Test addCard", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buy_id: "id_mock",
                card_holder: "",
                card_number: 959959959959959,
                card_expiration_date: "12/2022",
                card_cvv: 959
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buy_id: "id_mock",
                amount: 959,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Not valid card")
        }
    })
    test("Test addCard, field is fill", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buy_id: "id_mock1",
                card_holder: "",
                card_number: 959959959959959,
                card_expiration_date: "02/2028",
                card_cvv: 959
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buy_id: "id_mock1",
                amount: 150,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("all fields is fill")
        }
    })
    test("Test addCard, invalid card date", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buy_id: "id_mock1",
                card_holder: "",
                card_number: 959959959959959,
                card_expiration_date: "12/22",
                card_cvv: 959
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buy_id: "id_mock1",
                amount: 456,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Invalid card date")
        }
    })
   
})