import { AddressInfo } from "net";
import app from "./app";
import { getAddr } from "./endpoints/getAddress";
import { indAddress } from "./endpoints/indAddress";

app.post("/user/:cep",indAddress)

app.get("/endereco/:cep", getAddr)


const server = app.listen(process.env.PORT || 3005, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running http://localhost:${address.port}`);
    } else {
       console.error(`Failure starting server.`);
    }
});