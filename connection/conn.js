const mongoose = require("mongoose");
require('dotenv').config();

//Environment variable for database url
const DB_URI = process.env.DB_URI;

// Connecting Database
const conn = async (req, res) => {
  try {
    await mongoose.connect(DB_URI)
    .then(() => console.log("MongoDB connected"));
  } catch (err) {
    console.log(err);
    res.status(400).json({
        message: "Database not connected."
    });
  }
};
conn();

//Using try and catch is a good practice.
