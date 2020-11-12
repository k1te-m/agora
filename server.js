// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// PORT
const PORT = process.env.PORT || 3000;

// Express
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/agora", {
  useNewUrlParser: true,
});

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
