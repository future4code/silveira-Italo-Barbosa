import { ClientModel } from "../../model/ClientModel";
import { clientMock2, clientMock1 } from "./ClientMock";


export class ClientDataMock {
    public async getID(id: string): Promise<ClientModel | undefined >{
        switch (id) {
            case "id_mock":
                return clientMock1
            case "id_mock2":
                return clientMock2
            default:
                return undefined
        }
    }
}