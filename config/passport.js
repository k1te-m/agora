const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (error, user) => {
    done(error, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        return done(null, false, {
          message: "Incorrect email.",
        });
      } else {
        User.comparePassword(user.password, cb);
      }
    });
  })
);

module.exports = passport;
