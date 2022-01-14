const express = require("express");
const User = require("../schema/userSchema.js");
const router = express.Router();
// const userSchema = require("../schema/userSchema.js");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(500).send("User already exists");
  } else
    User.create(req.body, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await user.matchPassword(password))) {
    res.status(200).send("Successfully signed in");
  } else {
    res.status(500).send("Invalid Username or Password");
  }
});

router.post("/getUser", async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ username });
  try {
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
