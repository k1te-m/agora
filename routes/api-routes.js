const express = require("express");
const db = require("../models/index");
const apiRouter = express.Router();

apiRouter.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
      .then((newUser) => {
          res.json(newUser);
      })
      .catch((error) => {
          res.json(error);
      })
})

module.exports = apiRouter;