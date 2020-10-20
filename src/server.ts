import Debug from "debug";
const debug = Debug("muat-barang");
const error = Debug("app:error");

require("dotenv").config();

import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB()
    .then(() => debug("connection establisherd"))
    .catch((err) => error("error connecting to database: " + err));

  app.listen(PORT, () => debug(`server running on port ${PORT}`));
};

startServer();
