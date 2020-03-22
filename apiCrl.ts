import { Request, Response, NextFunction } from "express" // interface
import { writeFileSync, readFileSync } from "fs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

interface TodoList {
    id: number,
    createdAt: string,
    name: string,
    data: Array<object>
}

let todo: Array<TodoList> = JSON.parse(readFileSync("./data.json", "utf-8"))

class Controller {
    constructor() {
    }

    public getListTodo(req: Request, res: Response): void {
        
        //@ts-ignore
        const user = req.user
        console.log(user.username)

        res.status(200).json(todo.map((element: TodoList) => ({
            id: element.id,
            name: element.name,
            createdAt: element.createdAt
        })))
    }

    public postData(req: Request, res: Response): void {
        if (!req.body.listId) {
            res.sendStatus(401)
            return
        }

        for (let i in todo) {
            if (todo[i].id === req.body.listId) {
                console.log(req.body.listId)
                let newItem = req.body
                newItem.id = todo[i].data.length
                newItem.createdAt = new Date()
                delete newItem.listId
                // add new item to list
                todo[i].data.push(newItem)
                // write file
                writeFileSync("./data.json", JSON.stringify(todo), "utf-8")

                res.status(201).json({ message: "success" })
                return
            }
        }
    }

    public getList(req: Request, res: Response): void {
        if (!req.params.listId) {
            res.sendStatus(401)
            return
        }

        todo.forEach((element: TodoList) => {
            if (element.id.toString() === req.params.listId)
                return res.status(200).json(element.data)
        })
    }

    public login(req: Request, res: Response): void {
        if (!req.body.username || !req.body.password) {
            res.sendStatus(401)
            return
        }

        const username: string = req.body.username
        const password: string = req.body.password

        const accessToken = jwt.sign({ username }, process.env.TOKEN as string)

        res.status(200).json({ token: accessToken })
    }

    public authenticateToken (req: Request, res: Response, next: NextFunction): void {
        if (!req.headers["authorization"]) {
            res.sendStatus(401)
            return
        }

        const token: string = req.headers["authorization"]
        
        jwt.verify(token, process.env.TOKEN as string, (err: Error, user: object) => {
            if (err) {
                res.sendStatus(401)
                return
            }
            // @ts-ignore
            req.user = user
            next()
        })
    }
}

export = Controller