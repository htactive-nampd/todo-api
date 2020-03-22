import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import ApiController from "./apiCrl"

const controller = new ApiController()
const urlEncodedParser = bodyParser.urlencoded({ extended: true })

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.route("/api")
    .get(controller.authenticateToken, controller.getListTodo)
    .post(urlEncodedParser, controller.postData)

app.route("/api/:listId")
    .get(controller.getList)   
    
app.route("/login")
    .post(urlEncodedParser, controller.login)    

const PORT: number = 2500

app.listen(PORT, () => {console.log("listening on port" + PORT) })
