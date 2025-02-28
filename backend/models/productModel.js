const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  pname: { type: String, required: true },   // Product Name
  desc: { type: String, required: true },    // Product Description
  category: { type: String, required: true }, // Category (Electronics, Vehicles, etc.)
  startPrice: { type: Number, required: true }, // Starting Price
  image: { type: String, required: true },    // Image URL (Stored in Firebase)
  createdAt: { type: Date, default: Date.now } // Timestamp
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel; // ✅ Use module.exports instead of export default
