const express = require("express");
const app = express();
const router = express.Router();
const connectDB = require("./db-connect/db.js");
require("dotenv").config();
const authRouter = require("./authentication/auth.js");

connectDB();

app.use(express.json());
app.use(authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT ${process.env.PORT} `);
});
