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

ProductRouter.get("/allproducts", LoginRequire, (req, res) => {
  try {
    Product.find()
      .then((products) => {
        res.json({ products });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
});

ProductRouter.put(
  "/update-product/:productId",
  LoginRequire,
  IsAdmin,
  async (req, res) => {
    const { productId } = req.params;
    const { title, description, category, price, image } = req.body;
    try {
      await Product.findByIdAndUpdate(
        productId,
        {
          $set: {
            title,
            description,
            price,
            category,
            image,
          },
        },
        {
          new: true,
        },
        (err, data) => {
          if (err) {
            return res.status(422).json({ error: err });
          } else {
            return res
              .status(200)
              .json({ message: "Product Updated Successfully", data });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
);

ProductRouter.delete(
  "/delete/:productId",
  LoginRequire,
  IsAdmin,
  (req, res) => {
    const { productId } = req.params;
    try {
      Product.findByIdAndDelete(productId)
        .then((product) => {
          res.status(200).json({ message: "Successfully deleted", product });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = ProductRouter;
