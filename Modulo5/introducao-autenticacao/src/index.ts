import app from "./app"
import createUser from './endpoints/createUser'
import getUswithId from "./endpoints/getUswithId"
import login from "./endpoints/login"

app.post('/user/signup', createUser)
app.get("/user/profile", getUswithId)
app.post("/user/login", login)