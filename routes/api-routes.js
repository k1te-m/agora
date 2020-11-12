const express = require("express");
const db = require("../models/index");
const apiRouter = express.Router();
const passport = require("../config/passport");

apiRouter.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
      .then(() => {
          res.redirect(307, "/")
      })
      .catch((error) => {
          res.status(401).json(error);
      })
})

apiRouter.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
        email: req.user.email,
        id: req.user.id
    });
});

module.exports = apiRouter;