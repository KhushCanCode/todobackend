// Load environment variables from config.env file
require('dotenv').config();

//Database connection is done in conn.js file
require("./connection/conn");

//cors for backend and axios for frontend
const cors = require('cors');

const auth = require("./routes/auth");
const list = require("./routes/list");

const express = require('express');
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// Using environment variables
const PORT = process.env.PORT || 4000;

//Routes
app.get("/", (req, res) => {
    res.send('Hello, Bitches');
});

app.use("/api/v1/", auth); //signup and login
app.use("/api/v2/", list); //task creation, deletion, updation


// Starting the Server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
