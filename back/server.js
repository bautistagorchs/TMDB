const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./db/index");
const cors = require("cors");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const serverUrl = process.env.SERVER_URL || `localhost:3000`;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: `http://${serverUrl}`, credentials: true }));
app.use(cookieParser());

app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server levantado en el 3001 👻");
    });
  })
  .catch(console.error);
