const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.post("/addProduct", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add product" });
    }
});


module.exports = router;
