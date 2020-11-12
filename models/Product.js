const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: `Please enter a name for your product.`,
  },
  description: {
    type: String,
    trim: true,
    required: `Please enter a product description.`,
  },
  price: {
    type: Number,
    required: `Please enter a price for your product.`,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
