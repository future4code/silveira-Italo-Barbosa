import { app } from "./app"
import UserController from "./UserController"

const userController = new UserController()



app.post('/user/signup', userController.signUp)
app.post('/user/login', userController.login)
//app.get("/allUser",userController.getUsers)




