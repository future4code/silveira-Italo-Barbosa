

export class BuysModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private cpf: number
    ){}

    public getId() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
    public getEmail() {
        return this.email;
    }
    public getCpf() {
        return this.cpf;
    }
    public static todoBuysModel(buy: any): BuysModel {
        return new BuysModel(buy.id, buy.name, buy.email, buy.cpf);
    }
}

export interface InputAddBuy{
    name: string,
    email: string,
    cpf: number
}