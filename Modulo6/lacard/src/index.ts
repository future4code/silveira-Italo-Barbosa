import {app} from "../src/controller/app"

import BuysController from "./controller/BuysController";
import ClientController from "./controller/ClientController";
import PaymentController from "./controller/PaymentController";

const buysController = new BuysController()
const clientController = new ClientController()
const paymentController = new PaymentController()


app.post("/buys", buysController.addBuy)
app.post("/clients", clientController.addClient)
app.post("/payment/:client_id/:buy_id", paymentController.createPayment)


app.get("/payment/:payment_id", paymentController.getPaymentId)