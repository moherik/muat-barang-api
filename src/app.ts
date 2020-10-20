import express, { Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import compression from "compression"

import apiRouter from "./api/v1"

const app = express()

app.use(compression())
app.use(cors())
app.use(bodyParser.json())

app.get("/", (_req: Request, res: Response) => {
    res.send("muat barang api")
})

app.use("/api/v1", apiRouter)

export default app;