const mongoose = require("mongoose");

const VariantSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  variant: { type: String, required: true },
  value: { type: String, required: true }
});

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  variants: { type: [VariantSchema], required: true },
  description: { type: String, required: true }
}, { collection: "products" });

module.exports = mongoose.model("Product", ProductSchema);