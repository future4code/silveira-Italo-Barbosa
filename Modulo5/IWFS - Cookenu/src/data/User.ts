export enum user_roles {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(
        private id: string,
        private name:string,
        private email: string,
        private password: string,
        private role: user_roles
    ){
        this.id,
        this.name,
        this.email,
        this.password,
        this.role
    }

    static toUser(data:any):User{
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
}
