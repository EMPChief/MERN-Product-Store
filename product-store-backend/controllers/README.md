# Controllers Directory

Business logic controllers organized by API version. Each controller handles exactly one operation.

## Structure

```
controllers/
├── v1/                              # Version 1 controllers
│   ├── getAllProducts.controller.js # Get all products
│   ├── createProduct.controller.js  # Create new product
│   ├── getProductById.controller.js # Get single product
│   ├── updateProduct.controller.js  # Update product
│   ├── deleteProduct.controller.js  # Delete product
│   └── index.js                     # Export all v1 controllers
└── v2/                              # Version 2 controllers (example)
    └── getAllProducts.controller.js # Enhanced with pagination/filtering
```

## Design Principles

- **Single Responsibility**: One function per file
- **Version-based Organization**: Easy API evolution
- **Consistent Error Handling**: Standardized responses
- **Input Validation**: MongoDB ObjectId and data validation

## V1 Controllers

| Controller | Route | Purpose |
|------------|-------|---------|
| `getAllProducts` | `GET /api/v1/products` | Retrieve all products |
| `createProduct` | `POST /api/v1/products` | Create new product |
| `getProductById` | `GET /api/v1/products/:id` | Get single product |
| `updateProduct` | `PUT /api/v1/products/:id` | Update product |
| `deleteProduct` | `DELETE /api/v1/products/:id` | Delete product |

## Adding New Controllers

### New Operation (V1)
```javascript
// controllers/v1/newOperation.controller.js
import Product from "../../models/product.model.js";

export const newOperation = async (request, response) => {
  try {
    // Business logic here
    response.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: "Error message"
    });
  }
};
```

### New Version (V2)
1. Create `controllers/v2/` directory
2. Create controller files with enhanced features
3. Create `controllers/v2/index.js` to export all
4. Update routes to use new controllers

## Response Format

### Success
```json
{
  "success": true,
  "message": "Operation description",
  "data": {},
  "count": 0
}
```

### Error
```json
{
  "success": false,
  "message": "Error description",
  "error": "Details (development only)"
}
```

## Best Practices

- Keep controllers thin - only business logic
- Validate inputs before processing
- Return consistent response formats
- Handle errors gracefully
- Add meaningful error messages 