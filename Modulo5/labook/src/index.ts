import { UserBusiness } from "./business/UserBusiness"
import { app } from "./controller/app"
import { UserController } from "./controller/UserController"
import { UserDatabase } from "./data/mySQL/UserDatabase"
import { Authenticator } from "./services/Authenticator"
import { IdGenerator } from "./services/generateId"
import { hashManager } from "./services/hashManager"

const usercontroller = new UserController(
    new UserBusiness(
        new IdGenerator(),
        new hashManager(),
        new UserDatabase(),
        new Authenticator()
    )
)

app.post("/signup", usercontroller.signUp)







