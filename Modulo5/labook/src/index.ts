import { PostBusiness } from "./business/PostBusiness"
import { UserBusiness } from "./business/UserBusiness"
import { app } from "./controller/app"
import { PostController } from "./controller/PostController"
import { UserController } from "./controller/UserController"
import { PostDatabase } from "./data/mySQL/PostDatabase"
import { UserDatabase } from "./data/mySQL/UserDatabase"
import { Authenticator } from "./services/Authenticator"
import { IdGenerator } from "./services/generateId"
import { hashManager } from "./services/hashManager"

const usercontroller = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new hashManager(),
        new Authenticator()
    )
)

const postcontroller =  new PostController(
    new PostBusiness(
        new IdGenerator(),
        new PostDatabase(),
        new Authenticator(),

    )
)




app.post("/signup", usercontroller.signUp)
app.post("/login", usercontroller.login)


app.post("/post/create", postcontroller.createPost)
app.get("/post/id", postcontroller.getPostId)



