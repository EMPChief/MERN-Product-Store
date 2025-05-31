# Models Directory

MongoDB data models and schemas that define data structure, validation rules, and behavior.

## Structure

```
models/
├── product.model.js        # Product data schema
└── README.md              # This file
```

## Product Model

**Purpose**: Defines product data structure and validation for the e-commerce store.

```javascript
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
```

### Schema Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | String | Yes | Product name/title |
| `description` | String | Yes | Product description |
| `price` | Number | Yes | Price in currency units |
| `image` | String | Yes | Image URL |
| `category` | String | Yes | Product category |
| `stock` | Number | Yes | Available quantity |
| `createdAt` | Date | Auto | Creation timestamp |
| `updatedAt` | Date | Auto | Last update timestamp |

## Creating New Models

### Basic Structure
```javascript
import mongoose from "mongoose";

const entitySchema = new mongoose.Schema(
  {
    fieldName: {
      type: String,
      required: [true, 'Field is required'],
      trim: true,
      minlength: [2, 'Minimum 2 characters'],
      maxlength: [100, 'Maximum 100 characters']
    }
  },
  {
    timestamps: true
  }
);

const Entity = mongoose.model("Entity", entitySchema);
export default Entity;
```

### Common Validations

#### String Fields
```javascript
{
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name too short'],
    maxlength: [100, 'Name too long']
  }
}
```

#### Number Fields
```javascript
{
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
    validate: {
      validator: v => v > 0,
      message: 'Price must be positive'
    }
  }
}
```

#### Reference Fields
```javascript
{
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required']
  }
}
```

## Advanced Features

### Virtual Fields
```javascript
productSchema.virtual('isInStock').get(function() {
  return this.stock > 0;
});
```

### Instance Methods
```javascript
productSchema.methods.updateStock = function(quantity) {
  this.stock += quantity;
  return this.save();
};
```

### Indexes
```javascript
productSchema.index({ name: 'text', description: 'text' }); // Text search
productSchema.index({ category: 1, price: -1 }); // Compound index
```

## Model Relationships

### One-to-Many
```javascript
// Product belongs to Category
const productSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});
```

### Population
```javascript
// Get product with category details
const product = await Product.findById(id).populate('category');
```

## Planned Models

- **Category**: Product categorization
- **User**: User authentication and profiles
- **Order**: Purchase transactions
- **Review**: Product reviews and ratings

## Best Practices

- Use descriptive field names
- Add meaningful validation messages
- Index frequently queried fields
- Use references for relationships
- Validate all user inputs
- Keep schemas focused and simple 