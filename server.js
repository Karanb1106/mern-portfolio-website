const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const path = require("path");

// dotenv configurations
dotenv.config();

// rest objects
const app = express();

// middlewares
app.use(cors()); // communicate with another port
app.use(express.json()); // json data receive

// Static files access
app.use(express.static(path.join(___dirname, "./client/build")));

// routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", (req, res) => {
  res.sendFile(path.join(___dirname, "./client/build/index.html"));
});


// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
