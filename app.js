const express = require("express");
const app = express();

// Serve a simple HTML page
app.get("/", (req, res) => {
  res.send("<h1>Hello, World! test3</h1>");
});

module.exports = app;
