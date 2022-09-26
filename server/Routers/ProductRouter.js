const express = require("express");
const IsAdmin = require("../Middleware/IsAdmin");
const LoginRequire = require("../Middleware/LoginRequire");
const Product = require("../Models/Product");

const ProductRouter = express.Router();

ProductRouter.post("/addproduct", LoginRequire, IsAdmin, (req, res) => {
  const { title, description, image, price, category } = req.body;
  try {
    if (!title || !description || !image || !price) {
      return res.status(422).json({ error: "Please add all the fields" });
    } else {
      const product = new Product({
        title,
        description,
        image,
        price,
        category,
      });
      product
        .save()
        .then((result) => {
          res.json({ product: result });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = ProductRouter;
