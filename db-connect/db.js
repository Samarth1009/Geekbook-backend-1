const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config()
const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(String(process.env.MONGO_URI), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
