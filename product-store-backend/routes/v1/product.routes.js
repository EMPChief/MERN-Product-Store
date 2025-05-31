import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from "../../controllers/v1/index.js";

const router = express.Router();

// Product Routes - V1
router.get("/", getAllProducts);           // GET /api/v1/products
router.post("/", createProduct);          // POST /api/v1/products
router.get("/:id", getProductById);       // GET /api/v1/products/:id
router.put("/:id", updateProduct);        // PUT /api/v1/products/:id
router.delete("/:id", deleteProduct);     // DELETE /api/v1/products/:id

export default router; 