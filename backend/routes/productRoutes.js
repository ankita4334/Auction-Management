const express = require("express");
const router = express.Router();
const Product = require("../models/productModel"); // ✅ Ensure this is correct
const verifyAdmin = require("../middleware/authMiddleware");


// Add Product API
router.post("/addProduct", verifyAdmin, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

// Get Products API
router.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router; // ✅ Correctly exporting as a function
