import Product from "../../models/product.model.js";
import mongoose from "mongoose";

/**
 * Update a product by ID
 * @route PUT /api/v1/products/:id
 * @access Public
 */
export const updateProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const productData = request.body;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({
        success: false,
        message: "Invalid product ID format"
      });
    }

    // Validate data types if provided
    if (productData.price !== undefined && (typeof productData.price !== 'number' || productData.price <= 0)) {
      return response.status(400).json({ 
        success: false,
        message: "Price must be a positive number" 
      });
    }

    if (productData.stock !== undefined && (typeof productData.stock !== 'number' || productData.stock < 0)) {
      return response.status(400).json({ 
        success: false,
        message: "Stock must be a non-negative number" 
      });
    }

    // Check if product exists before updating
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return response.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id, 
      productData, 
      { 
        new: true,
        runValidators: true
      }
    );

    response.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    
    if (error.name === 'ValidationError') {
      return response.status(400).json({ 
        success: false,
        message: "Validation error",
        details: Object.values(error.errors).map(err => err.message)
      });
    }

    response.status(500).json({ 
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}; 