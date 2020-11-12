const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models/index");

// passport.use(
//     new LocalStrategy(
//         {
//             usernameField: "email"
//         },
//         (email, password, done) => {
//             db.User.find(
//                 { _}
//             )
//         }
//     )
// )