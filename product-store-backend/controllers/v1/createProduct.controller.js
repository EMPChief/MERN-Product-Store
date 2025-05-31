import Product from "../../models/product.model.js";

/**
 * Create a new product
 * @route POST /api/v1/products
 * @access Public
 */
export const createProduct = async (request, response) => {
  try {
    const productData = request.body;

    // Validate required fields
    const requiredFields = ['name', 'description', 'price', 'image', 'category', 'stock'];
    const missingFields = requiredFields.filter(field => !productData[field]);
    
    if (missingFields.length > 0) {
      return response.status(400).json({ 
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`,
        requiredFields
      });
    }

    // Convert price and stock to numbers
    productData.price = Number(productData.price);
    productData.stock = Number(productData.stock);

    // Validate data types
    if (isNaN(productData.price) || productData.price <= 0) {
      return response.status(400).json({ 
        success: false,
        message: "Price must be a positive number" 
      });
    }

    if (isNaN(productData.stock) || productData.stock < 0) {
      return response.status(400).json({ 
        success: false,
        message: "Stock must be a non-negative number" 
      });
    }

    const newProduct = await Product.create(productData);

    response.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    
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