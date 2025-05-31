import Product from "../../models/product.model.js";
import mongoose from "mongoose";

/**
 * Get a single product by ID
 * @route GET /api/v1/products/:id
 * @access Public
 */
export const getProductById = async (request, response) => {
  try {
    const { id } = request.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({
        success: false,
        message: "Invalid product ID format"
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return response.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    response.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    response.status(500).json({ 
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}; 