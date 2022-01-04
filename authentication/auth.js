const express = require("express");
const User = require("../schema/userSchema.js");
const router = express.Router();
// const userSchema = require("../schema/userSchema.js");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const userExists = await User.findOne({username});
  if(userExists){
     res.send("User already exists");
    //  throw new Error("User already exists");
  }

  User.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post("/signin", async(req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});
  if(user && (await user.matchPassword(password))){
    res.send("Successfully signed in");
    console.log("Successfully signed in");
  }
  else{
    res.send("Invalid Username or Password");
    throw new Error("Invalid Username or Password");
  }
 
});



module.exports = router;
