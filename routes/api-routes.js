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

apiRouter.post("/api/login", (req, res, next) => {
    passport.authenticate("local", function(error, user, info) {
        if (err) {
            return res.status(400).json({errors: error});
        }
        if (!user) {
            return res.status(400).json({errors: "User not found!"});
        }
        req.logIn(user, function(error) {
            if (error) {
                return res.status(400).json({errors: error});
            }
            return res.status(200).json({ success: `Logged in ${user.id}`});
        })
    });
})


module.exports = apiRouter;