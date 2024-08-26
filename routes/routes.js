const express = require("express");
const router = express.Router();
const product = require("../models/product");
const multer = require("multer");
const fs = require("fs");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

router.post("/add", upload, async (req, res) => {
  try {
    const newProduct = new product({
      name: req.body.name,
      stock: req.body.stock,
      price: req.body.price,
      image: req.file.filename,
    });

    await newProduct.save();

    req.session.message = {
      type: "info",
      message: "Product Added Successfully",
    };
    res.redirect("/home");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

router.get("/home", async (req, res) => {
  try {
    const products = await product.find().exec();
    res.render("home", {
      title: "Home",
      products: products,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get("/add", (req, res) => {
  res.render("add", { title: "Add Product" });
});

router.get("/update/:id", async (req, res) => {
  try {
    let id = req.params.id; // Menggunakan req.params.id
    let products = await product.findById(id);

    if (products === null) {
      res.redirect("/home");
    } else {
      res.render("update", {
        title: "Update Product",
        products: products,
      });
    }
  } catch (err) {
    res.redirect("/home");
  }
});

router.post("/update/:id", upload, async (req, res) => {
  let id = req.params.id;
  let new_image = "";

  try {
    if (req.file) {
      new_image = req.file.filename;

      try {
        fs.unlinkSync("./upload/" + req.body.old_image);
      } catch (err) {
        console.log(err);
      }
    } else {
      new_image = req.body.old_image;
    }

    await product.findByIdAndUpdate(id, {
      name: req.body.name,
      stock: req.body.stock,
      price: req.body.price,
      image: new_image,
    });

    req.session.message = {
      type: "info",
      message: "Product Updated Successfully",
    };

    res.redirect("/home");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

router.get("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await product.findByIdAndDelete(id);

    if (result && result.image) {
      try {
        await fs.promises.unlink("./upload/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }

    req.session.message = {
      type: "info",
      message: "Product Deleted Successfully",
    };
    res.redirect("back");
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

module.exports = router;
