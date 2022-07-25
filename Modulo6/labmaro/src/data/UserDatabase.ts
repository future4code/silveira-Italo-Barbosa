import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    private static TABLE_NAME = "lamaro_user"

    signUp = async (newUser: User) => {
        try {
            await BaseDatabase.connection()
                    .insert({
                        id: newUser.getId(),
                        nome: newUser.getNome(),
                        email: newUser.getEmail(),
                        senha: newUser.getSenha(),
                    })
                    .into(UserDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserByEmail = async (email: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({email})

            return result[0] && User.toUserModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}