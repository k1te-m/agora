// Dependencies
const routes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");
const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express");
const passport = require("passport");

// Express & Session Set-Up
const app = express();
app.use(express.static("public"));
const session = require("express-session");
// PORT
const PORT = process.env.PORT || 3000;
app.use(
  session({
    secret: "bazinga",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// Handlebars Set-up
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use(routes);
app.use(apiRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/agora", {
  useNewUrlParser: true,
});

// Listen on PORT
app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
