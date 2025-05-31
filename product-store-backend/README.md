# Product Store Backend API

A RESTful API for managing products in an e-commerce application built with Node.js, Express.js, and MongoDB.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, Delete products
- **API Versioning**: Structured for easy version management (v1, v2, etc.)
- **Error Handling**: Comprehensive error handling middleware
- **MongoDB Integration**: Persistent data storage with Mongoose
- **Environment Configuration**: Secure environment variable management
- **Modular Structure**: Clean, organized codebase

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-store-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/product-store
   NODE_ENV=development
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📚 API Endpoints

### Base URL: `http://localhost:5000/api/v1`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a single product |
| POST | `/products` | Create a new product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

### Product Schema

```json
{
  "name": "string (required)",
  "description": "string (required)",
  "price": "number (required)",
  "image": "string (required)",
  "category": "string (required)",
  "stock": "number (required)"
}
```

### Example Requests

#### Create Product
```bash
POST /api/v1/products
Content-Type: application/json

{
  "name": "iPhone 16",
  "description": "Latest iPhone model",
  "price": 999.99,
  "image": "https://example.com/iphone16.jpg",
  "category": "electronics",
  "stock": 50
}
```

#### Response
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "_id": "60a1b2c3d4e5f6789abc",
    "name": "iPhone 16",
    "description": "Latest iPhone model",
    "price": 999.99,
    "image": "https://example.com/iphone16.jpg",
    "category": "electronics",
    "stock": 50,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 📁 Project Structure

```
product-store-backend/
├── config/
│   └── db.js                 # Database connection
├── middleware/
│   └── errorHandler.js       # Error handling middleware
├── models/
│   └── product.model.js      # Product schema
├── routes/
│   ├── index.js             # Main router
│   └── v1/
│       ├── index.js         # V1 router
│       └── product.routes.js # Product routes
├── server.js                # Main application file
├── package.json
└── README.md
```

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `NODE_ENV` | Environment mode | `development` or `production` |

## 🚦 Error Handling

The API includes comprehensive error handling:

- **400**: Bad Request (validation errors)
- **404**: Not Found (invalid routes/resources)
- **500**: Internal Server Error

Example error response:
```json
{
  "success": false,
  "message": "All fields are required",
  "stack": "Error stack trace (development only)"
}
```

## 🔄 API Versioning

The API is structured for easy versioning:

- **Current**: `/api/v1/products`
- **Future**: `/api/v2/products` (when v2 is added)

To add a new version:
1. Create `routes/v2/` directory
2. Add your routes in `routes/v2/`
3. Import and use in `routes/index.js`

## 🛡️ Validation

All required fields are validated:
- `name`: Product name (string, required)
- `description`: Product description (string, required)
- `price`: Product price (number, required)
- `image`: Product image URL (string, required)
- `category`: Product category (string, required)
- `stock`: Product stock quantity (number, required)

## 🧪 Testing

Use tools like Postman, Insomnia, or curl to test the API endpoints.

### Example with curl:
```bash
# Get all products
curl http://localhost:5000/api/v1/products

# Create a product
curl -X POST http://localhost:5000/api/v1/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","description":"Test","price":99.99,"image":"test.jpg","category":"test","stock":10}'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🐛 Issues

If you encounter any issues, please open an issue on the repository with:
- Error description
- Steps to reproduce
- Expected vs actual behavior
- Environment details

---

**Happy coding! 🚀** 