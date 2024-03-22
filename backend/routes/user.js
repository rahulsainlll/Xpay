const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const User = require("../db");
const { JWT_SECRET } = require("../config");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  const token = jwt.sign({ userId, JWT_SECRET });

  res.json({
    message: "User created successfully",
    token: token,
  });
});

// router.post("/signin", async (req, res) => {
//   const { success } = signupBody.safeParse(req.body);
//   if (!success) {
//     res.status(411).json({
//       message: "Incorrect inputs",
//     });
//   }

//   const existingUser = await User.findOne({
//     username: req.body.username,
//   });

//   if(existingUser.username === req.body.username && existingUser.password === req.body.username){
//     res.status(200){
//       token: "jwt"
//     }
//   }
// });

module.exports = router;
