# Configuration Directory

Application configuration files for database connections and environment settings.

## Structure

```
config/
├── db.js           # Database connection configuration
└── README.md       # This file
```

## Database Configuration (`db.js`)

**Purpose**: Manages MongoDB connection using Mongoose.

```javascript
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    const databaseConnection = await mongoose.connect(process.env.MONGODB_URI);
    return databaseConnection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
```

**Features**:
- Environment variable validation
- Error handling with process exit
- Clean error messages

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/product-store` |
| `PORT` | Server port number | `5021` |
| `NODE_ENV` | Application environment | `development` or `production` |

### Connection Examples

#### Local MongoDB
```bash
MONGODB_URI=mongodb://localhost:27017/product-store
```

#### MongoDB Atlas (Cloud)
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/product-store
```

## Environment Setup

### Development
Create `.env` file in backend root:
```bash
PORT=5021
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/product-store
```

### Production
Set environment variables on your deployment platform:
```bash
heroku config:set MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
heroku config:set NODE_ENV=production
```

## Adding New Configuration

For additional services, create new config files:

```javascript
// config/redis.js
import redis from 'redis';

export const connectRedis = async () => {
  try {
    const client = redis.createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379'
    });
    await client.connect();
    return client;
  } catch (error) {
    console.error('Redis connection error:', error);
    throw error;
  }
};
```

## Connection Monitoring

Add event listeners for better monitoring:
```javascript
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB error:', err);
});
```

## Common Issues

### Connection Timeout
**Error**: `MongoServerSelectionError: connection timed out`
**Solutions**:
- Check MongoDB server status
- Verify connection string
- Check network connectivity

### Missing Environment Variable
**Error**: `MONGODB_URI is not defined`
**Solutions**:
- Create `.env` file
- Set environment variables
- Check variable spelling

## Best Practices

- Never commit sensitive data
- Validate required variables
- Handle connection failures gracefully
- Use strong connection strings
- Test configurations in all environments 