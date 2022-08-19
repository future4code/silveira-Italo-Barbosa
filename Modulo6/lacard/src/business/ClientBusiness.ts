import ClientDatabase from "../data/ClientDatabase";
import { IdGenerator } from "../services/id";

export default class ClientBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private clientDatabase = new ClientDatabase()
    ){}

    public addClient = async() => {
        try {
            const id: string = this.idGenerator.generateId()

            await this.clientDatabase.addClient(id)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}