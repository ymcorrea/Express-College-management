const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error: " + error.message);
  }
};

dbConnect(); 