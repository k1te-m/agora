// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

// PORT
const PORT = process.env.PORT || 3000;

// Express
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/agora", {
  useNewUrlParser: true,
});

// Handlebars Set-up
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
app.use(routes);
app.use(apiRoutes);

// Listen on PORT
app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
