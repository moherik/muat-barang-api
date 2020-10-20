import path from "path";
import {createConnection} from "typeorm"

export const dbConnect = async () => {
    await createConnection({
         type: "postgres",
         host: process.env.DB_HOST,
         port: process.env.DB_PORT as unknown as number,
         username: process.env.DB_USERNAME,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_NAME,
         entities: [path.join(__dirname, "../entity/*{.js,.ts}")],
         synchronize: true
    })
}
