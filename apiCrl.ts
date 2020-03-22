import { Request, Response } from "express" // interface
import { writeFileSync, readFileSync } from "fs"

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

    public getListTodo(req: Request, res: Response):void {
    
        res.status(200).json(todo.map((element:TodoList) => ({
            id: element.id,
            name: element.name,
            createdAt: element.createdAt
        }))) 
    }

    public postData(req: Request, res: Response):void {
        if (!req.body.listId) return
        
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
        if ( !req.params.listId ) return 

        todo.forEach((element: TodoList) => {
            if (element.id.toString() === req.params.listId)
                return res.status(200).json(element.data)
        })
    }
}

export = Controller