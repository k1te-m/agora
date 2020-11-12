const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

const User = mongoose.model("User", UserSchema);

module.exports = User;