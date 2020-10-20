import express, { Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (_req: Request, res: Response) => {
    res.send("muat barang api")
})
    
export default app;