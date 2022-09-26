const express = require("express");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../keys");
const LoginRequire = require("../Middleware/LoginRequire");
const IsAdmin = require("../Middleware/IsAdmin");

userRouter.get("/restricted", LoginRequire, (req, res) => {
  res.send("i am the Restricted page");
});

// for User Registration
userRouter.post("/signup", async (req, res) => {
  const { name, email, password, image } = req.body;
  const isUserExist = await User.findOne({ email: email });
  try {
    if (isUserExist) {
      return res.status(422).json({ status: 422, error: "User already exist" });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          const user = new User({
            name,
            email,
            password: hash,
            image,
          });
          user
            .save()
            .then((user) => {
              res.status(200).json({
                message: "User saved successfully lets chears up!!!!",
                user,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/signin", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid email or password" });
      }
      bcrypt
        .compare(password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            const token = jwt.sign({ _id: savedUser._id }, SECRET_KEY);
            const { name, email, _id } = savedUser;
            res.json({
              status: "okk",
              message: "successfully signed in",
              token,
              user: { _id, name, email },
            });
          } else {
            return res.status(422).json({ error: "Invalid email or password" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
userRouter.put("/update-user/:userId", LoginRequire, IsAdmin, (req, res) => {
  const { name, email, password, image, admin } = req.body;
  const { userId } = req.params;
  console.log(userId);
  User.findByIdAndUpdate(
    userId,
    {
      $set: {
        admin,
      },
    },
    {
      new: true,
    }
  )
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = userRouter;
