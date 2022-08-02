import {app} from "./app"
import {Controller} from "./endpoints/Controller"



const controller = new Controller



app.post("/signup", controller.cadast)
app.post("/login", controller.login)

app.get("/user/profile", controller.getUs)
app.get("/user/:id", controller.getUsother)

app.post("/recipe", controller.createRecipe)
app.post("/recipe/:id", controller.getRecipe)