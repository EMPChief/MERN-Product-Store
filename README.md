# MERN Product Store

A full-stack e-commerce product store built with MongoDB, Express.js, React.js, and Node.js.

## 🚀 Features

- **RESTful API** with version-based architecture (v1, v2)
- **Modular Controllers** - single-responsibility pattern
- **MongoDB Integration** with Mongoose
- **Comprehensive Error Handling**
- **Modern React Frontend**

## 📋 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm/yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd mern-product-store

# Backend setup
cd product-store-backend
npm install
# Create .env file with PORT=5021, MONGODB_URI, NODE_ENV=development
npm run dev

# Frontend setup (new terminal)
cd ../product-store-frontend
npm install
npm start
```

## 📁 Project Structure

```
mern-product-store/
├── product-store-backend/
│   ├── config/                     # Database configuration
│   ├── controllers/v1/             # Business logic (one function per file)
│   ├── middleware/                 # Express middleware
│   ├── models/                     # MongoDB schemas
│   ├── routes/v1/                  # API routes
│   └── server.js                   # Entry point
├── product-store-frontend/         # React application
└── README.md                       # This file
```

## 🔌 API Endpoints

**Base URL**: `http://localhost:5021/api/v1`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| POST | `/products` | Create product |
| GET | `/products/:id` | Get single product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

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

## 🎯 Architecture Highlights

### Controller Pattern
Each API operation has its own controller file:
- `getAllProducts.controller.js`
- `createProduct.controller.js`
- `getProductById.controller.js`
- `updateProduct.controller.js`
- `deleteProduct.controller.js`

### Version Management
```
/api/v1/products  →  controllers/v1/
/api/v2/products  →  controllers/v2/ (future)
```

## 🔧 Environment Variables

```bash
# Backend (.env)
PORT=5021
MONGODB_URI=mongodb://localhost:27017/product-store
NODE_ENV=development
```

## 🧪 Testing API

```bash
# Get all products
curl http://localhost:5021/api/v1/products

# Create product
curl -X POST http://localhost:5021/api/v1/products \
  -H "Content-Type: application/json" \
  -d '{"name":"iPhone","description":"Latest iPhone","price":999,"image":"url","category":"electronics","stock":50}'
```

## 📖 Documentation

- **Backend**: `product-store-backend/README.md`
- **Controllers**: `product-store-backend/controllers/README.md`
- **Routes**: `product-store-backend/routes/README.md`
- **Models**: `product-store-backend/models/README.md`
- **Config**: `product-store-backend/config/README.md`

## 🚀 Deployment

### Backend (Heroku)
```bash
heroku create your-app-name
heroku config:set MONGODB_URI=your-mongo-uri
heroku config:set NODE_ENV=production
git push heroku main
```

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy build folder
```

## 🎯 Future Features

### Backend Roadmap
- [ ] User authentication
- [ ] Image upload
- [ ] Order management
- [ ] API rate limiting

### Frontend Roadmap
- [ ] Shopping cart
- [ ] User registration
- [ ] Product search/filtering
- [ ] Admin dashboard

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request 