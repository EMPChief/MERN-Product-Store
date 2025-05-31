# Routes Directory

API route definitions organized by version for maintainability and backward compatibility.

## Structure

```
routes/
├── index.js                    # Main router with version routing
├── v1/                        # Version 1 routes
│   ├── index.js              # V1 router aggregator
│   └── product.routes.js     # Product-related routes
└── README.md                 # This file
```

## Architecture

Version-first, resource-second approach:
```
/api/v1/products     → routes/v1/product.routes.js
/api/v1/users        → routes/v1/user.routes.js (future)
/api/v2/products     → routes/v2/product.routes.js (future)
```

## Current V1 Endpoints

| Method | Endpoint | Description | Controller |
|--------|----------|-------------|------------|
| GET | `/api/v1/products` | Get all products | `getAllProducts` |
| POST | `/api/v1/products` | Create new product | `createProduct` |
| GET | `/api/v1/products/:id` | Get product by ID | `getProductById` |
| PUT | `/api/v1/products/:id` | Update product | `updateProduct` |
| DELETE | `/api/v1/products/:id` | Delete product | `deleteProduct` |

## Route Files

### Main Router (`index.js`)
Central hub that delegates to version-specific routers:
```javascript
router.use("/v1", v1Routes);
// router.use("/v2", v2Routes); // Future versions
```

### Resource Router (`v1/product.routes.js`)
Maps HTTP methods to controller functions:
```javascript
router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
```

## Adding New Routes

### New Resource (V1)
1. Create `routes/v1/newresource.routes.js`
2. Add to `routes/v1/index.js`: `router.use("/newresources", newResourceRoutes)`

### New Version (V2)
1. Create `routes/v2/` directory
2. Create route files with new features
3. Add to main router: `router.use("/v2", v2Routes)`

## RESTful Conventions

| Action | Method | Pattern | Example |
|--------|--------|---------|---------|
| List all | GET | `/resource` | `GET /products` |
| Create | POST | `/resource` | `POST /products` |
| Get one | GET | `/resource/:id` | `GET /products/123` |
| Update | PUT | `/resource/:id` | `PUT /products/123` |
| Delete | DELETE | `/resource/:id` | `DELETE /products/123` |

## Testing Routes

```bash
# Get all products
curl http://localhost:5021/api/v1/products

# Create product
curl -X POST http://localhost:5021/api/v1/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","price":99,"category":"test","description":"test","image":"url","stock":10}'

# Get single product
curl http://localhost:5021/api/v1/products/[PRODUCT_ID]

# Update product
curl -X PUT http://localhost:5021/api/v1/products/[PRODUCT_ID] \
  -H "Content-Type: application/json" \
  -d '{"price":149.99}'

# Delete product
curl -X DELETE http://localhost:5021/api/v1/products/[PRODUCT_ID]
```

## Best Practices

- Keep routes thin - delegate to controllers
- Use consistent naming (plural nouns)
- Follow RESTful patterns
- Version carefully to avoid breaking changes
- Use middleware for common concerns (auth, validation) 