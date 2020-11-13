const express = require("express");
const db = require("../models/index");
const apiRouter = express.Router();
const passport = require("../config/passport");

apiRouter.post("/api/signup", (req, res) => {
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
      .then(() => {
          res.status(200).json({user: req.body})
          console.log(`Registerd new user, ${req.body.name}.`)
      })
      .catch((error) => {
          console.log(error);
          res.status(401).json(error);
      })
})

apiRouter.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
        username: req.user.email,
        id: req.user._id
    });
    console.log(`Logged in as: ${req.user.name}.`);
})


module.exports = apiRouter;