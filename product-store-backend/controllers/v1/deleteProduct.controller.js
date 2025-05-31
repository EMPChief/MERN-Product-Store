import Product from "../../models/product.model.js";
import mongoose from "mongoose";

/**
 * Delete a product by ID
 * @route DELETE /api/v1/products/:id
 * @access Public
 */
export const deleteProduct = async (request, response) => {
  try {
    const { id } = request.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({
        success: false,
        message: "Invalid product ID format"
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return response.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    response.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: {
        id: deletedProduct._id,
        name: deletedProduct.name
      }
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    response.status(500).json({ 
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}; 