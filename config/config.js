const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||'mongodb+srv://Ramya:k01ramya@cluster0.oacjx.mongodb.net/users?retryWrites=true&w=majority'||
    process.env.MONGO_HOST 
}

export default config
