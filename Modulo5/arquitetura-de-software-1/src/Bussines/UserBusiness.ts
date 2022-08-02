import Data from "../data/Data";
import { Input } from "../types/user";
import { UserByEmail } from "../data/UserByEmail";
import { compare } from "bcryptjs";
import { UserDatabase } from "../data/UserDatabase";


class UserBusiness {

    
    async signUp(user:Input) {

        const { name, email, password, role } = user

        if (
            !name ||
            !email ||
            !password ||
            !role
        ) {
            throw new Error('Preencher todos os campos')
        }
        if(user.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(user.password.length < 8){
            throw new Error("Password invalid, 8 or more.");
        }
        
        const id: string = generateId()

        const HashPassword = await hash(password);

       
       
        const usData = new Data()
        
        const token: string = generateToken({
            id,
            role: role
        })


         await usData.insertUser({
            id,
            name,
            email,
            password: HashPassword,
            role
        })

        
        
        return token

    }

    
    async login(user) {

        const users = await UserByEmail(user.email);

        const hashCompare = await compare(user.password, users.getPassword());

        const access = generateToken({ id: users.getId()});

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return access;
    }

    async getAll(token: string) {
				
        getData(token);
        return await UserDatabase.get();
    }
}
}

export default UserBusiness