const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4,
        maxPoolSize: 10,
        heartbeatFrequencyMS: 10000,
        bufferCommands: false,
      }
    );
    
    console.log("Database Connected successfully!");
    
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDB;
