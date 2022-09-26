const express = require("express");
const mongoose = require("mongoose");
const { DB } = require("./keys");
const userRouter = require("./Routers/UserRouter");
const app = express();

const PORT = process.env.PORT || 5000;
mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    console.log("Connection successfull");
  }
);
app.use(express.json());
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server is listening in port no: ${PORT}`);
});
