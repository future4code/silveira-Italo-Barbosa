import BuysDatabase from "../data/BuysDatabase";
import { CustomError } from "../model/CustomError";
import { BuysModel, InputAddBuy } from "../model/BuysModel";
import { IdGenerator } from "../services/id";


export default class BuysBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private buyData = new BuysDatabase()
    ){}

    public addBuy = async(input: InputAddBuy) => {
        try {
            const {name, email, cpf} = input

            if(!name || !email || !cpf){
                throw new CustomError(422, "Error, empty fields")
            }

            if(!email.includes("@")){
                throw new CustomError(400, "Invalid email")
            }

            if(cpf.toString().length !== 11){
                throw new CustomError(400, "Invalid CPF")
            }

            const registEmail = await this.buyData.getEmail(email)
            const registCpf = await this.buyData.getCpf(cpf)

            if(registCpf || registEmail){
                throw new CustomError(409, "Email or CPF registered")
            }

            const id: string = this.idGenerator.generateId()

            const newBuyer = new BuysModel(
                id,
                name,
                email,
                cpf
            )

            await this.buyData.addBuy(newBuyer)
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getId = async(id:string) => {
        try {
            const result = await this.buyData.getID(id)
            if(!result) {
                throw new Error("Buyer error")
            }

            return result
        } catch (error:any) {
            throw new CustomError(400, error.message)
        }
    }
}