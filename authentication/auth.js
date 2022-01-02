const express = require("express");
const router = express.Router();
const userSchema = require("../schema/userSchema.js");

router.post("/signup", async (req, res) => {
  userSchema.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
