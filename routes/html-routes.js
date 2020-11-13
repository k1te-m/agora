const express = require("express");
const { User } = require("../models/index");
const router = express.Router();
const db = require("../models/index")

router.get("/", (req, res) => {
  let accessLevel = 0;
  if (req.user) accessLevel = req.user.accessLevel;
  res.render("index", {loggedIn:accessLevel});
  console.log(req.user);
});

router.get("/signup", (req, res) => {
  let accessLevel = 0;
  if (req.user) {
    console.log(req.user);
    accessLevel = req.user.accessLevel;}
  res.render("signup", {loggedIn:accessLevel});
});

router.get("/login", (req, res) => {
  let accessLevel = 0;
  if (req.user) accessLevel = req.user.accessLevel;
  res.render("login", {loggedIn:accessLevel});
})

router.get("/bazinga", function(req, res) {
  res.render("bazinga");
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
})

router.get("/members", (req, res) => {
  if (req.user) {
    let userName = req.user.name;
    let userEmail = req.user.email;
    let joinDate = req.user.joinDate;
    let accessLevel = req.user.accessLevel;

    res.render("members", {
      userName,
      userEmail,
      joinDate,
      accessLevel
    })
  } else {
    res.render("login");
  }
})
module.exports = router;
