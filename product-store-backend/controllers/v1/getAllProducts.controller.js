import Product from "../../models/product.model.js";

/**
 * Get all products
 * @route GET /api/v1/products
 * @access Public
 */
export const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json({ 
      success: true, 
      data: products,
      count: products.length 
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    response.status(500).json({ 
      success: false, 
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}; 