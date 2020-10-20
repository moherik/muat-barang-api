require("dotenv").config()

import app from "./app"
import { dbConnect } from "./config/db"

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    await dbConnect()
            .then(() => console.log("connection establisherd"))
            .catch((err) => console.error("error connecting to database: ", err));
    
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
}

startServer()
