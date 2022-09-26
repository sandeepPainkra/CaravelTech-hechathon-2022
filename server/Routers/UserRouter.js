const express = require("express");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("i am the user");
});

// for User Registration
userRouter.post("/signup", async (req, res) => {
  const { name, email, password, image } = req.body;
  const isUserExist = await User.findOne({ email: email });
  try {
    if (isUserExist) {
      return res.status(422).json({ status: 422, error: "User already exist" });
    } else {
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = User.create({
          name,
          email,
          password: hashedpassword,
          image:
            "https://imgs.search.brave.com/tR2EP_-vkxQC7glaasaQYJ-ezvCxify2YXxTlErOf2c/rs:fit:469:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/eGRxQkZMVkxQY1dz/amtkczg2MzZRSGFI/ZiZwaWQ9QXBp",
        })
          .then((data) => {
            res.json({ message: "successfull registered!!", data });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/signin", (req, res) => {});
module.exports = userRouter;
