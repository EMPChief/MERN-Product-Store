import { create } from "zustand";

// product store 
const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  // create product 
  createProduct: async (newProduct) => {
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.description ||
      !newProduct.image ||
      !newProduct.category ||
      !newProduct.stock
    ) {
      return { success: false, message: "All fields are required" };
    }
    const response = await fetch("/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to create product",
      };
    }

    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
  },
  // fetch all products 
  fetchProducts: async () => {
    const response = await fetch("/api/v1/products");
    const data = await response.json();
    set({ products: data.data });
  },
  // delete product by id 
  deleteProduct: async (productId) => {
    const response = await fetch(`/api/v1/products/${productId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (!data.success) {
      return {
        success: false,
        message: data.message || "Failed to delete product",
      };
    }
    set((state) => ({
      products: state.products.filter((product) => product._id !== productId),
    }));
    return { success: true, message: "Product deleted successfully" };
  },
  // update product by id 
  updateProduct: async (productId, updatedProduct) => {
    const response = await fetch(`/api/v1/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await response.json();
    
    if (!data.success) {
      return {
        success: false,
        message: data.message || "Failed to update product",
      };
    }
    
    set((state) => ({
      products: state.products.map((product) =>
        product._id === productId ? data.data : product
      ),
    }));
    return { success: true, message: "Product updated successfully" };
  },
}));

export default useProductStore;
