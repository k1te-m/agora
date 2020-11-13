const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        return done(null, false, {
          message: "Incorrect email.",
        });
      } else if (!user.comparePassword(password)) {
        return done(null, false, {
          message: "Incorrect username or password."
        });
      }
      return done (null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
