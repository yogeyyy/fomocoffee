require("dotenv").config();
const express = require("express");
const app = express();

const PORT = 8005;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
