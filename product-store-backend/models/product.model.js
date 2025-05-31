import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Name of the product
    description: { type: String, required: true }, // Description of the product
    price: { type: Number, required: true }, // Price of the product
    image: { type: String, required: true }, // Image of the product
    category: { type: String, required: true }, // Category of the product
    stock: { type: Number, required: true }, // Stock of the product
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields to the schema
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
