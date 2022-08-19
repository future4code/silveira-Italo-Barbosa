import { BuysModel } from "../../model/BuysModel"
import { Buy1, Buy2 } from "./BuyMock"

export class BuyerDatabaseMock {
    public async insert(Buy: BuysModel): Promise<void> { }

    public async getEmail(email: string): Promise<BuysModel | undefined> {
        switch (email) {
            case "catrac@gmail.com":
                return Buy1
            case "catrac2@gmail.com":
                return Buy2
            default:
                return undefined
        }
    }
    public async getCpf(cpf: number): Promise<BuysModel | undefined> {
        switch (cpf) {
            case 95995995995:
                return Buy1
            case 95995995995:
                return Buy2
            default:
                return undefined
        }
    }
    public async getID(id: string): Promise<BuysModel | undefined> {
        switch (id) {
            case "id_mock1":
                return Buy1
            case "id_mock2":
                return Buy2
            default:
                return undefined
        }
    }
}