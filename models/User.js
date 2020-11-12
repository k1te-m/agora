const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: `Please enter your name.`
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: `Email address is required.`,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        trim: true,
        required: `Please enter a password.`
    },
})

UserSchema.pre("save", () => {
    var user = this;
    if (!user.isModified("password")) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(error, salt) {
        if (error) return next(error);

        bcrypt.hash(user.password, salt, function(error, hash) {
            if (error) return next(error);
            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = function(userPassword, cb) {
    bcrypt.compare(userPassword, this.password, function(error, isMatch) {
        if (error) return cb(error);
        cb(null, isMatch);
    })
}


const User = mongoose.model("User", UserSchema);

module.exports = User;