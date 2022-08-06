import { ProdBusiness } from "./business/ProdBusiness";
import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import { ProdController } from "./controller/ProdController";
import { UserController } from "./controller/UserController";
import { ProdDatabase } from "./data/ProdDatabase";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userController = new UserController(
    new UserBusiness(
        new IdGenerator(),
        new HashManager(),
        new UserDatabase(),
        new Authenticator()
    )
)

const prodController = new ProdController(
    new ProdBusiness(
        new IdGenerator(),
        new ProdDatabase(),
        new Authenticator()
    )
)

// Usuário
app.post("/signup", userController.signUp)
app.post("/login", userController.login)

// Post
app.post("/prod", prodController.createProd)
app.get("/prod?=id", prodController.getProdutoById)
app.get("/prod", prodController.getProdutoByNome)
app.get("/prod", prodController.getProdutoByTag)