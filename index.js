const express = require("express");
const app = express();
const router = express.Router();
const connectDB = require("./db-connect/db.js");
const dotenv = require("dotenv");
const userSchema = require("./Schema/userSchema.js");


//dotenv.config();
connectDB();
app.use(express.json());


app.post("/auth", async (req, res) => {
  userSchema.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT} `);
});
