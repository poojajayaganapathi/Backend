const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    bio: String,
    role: {
        type: String,
        enum: ["ADMIN", "OPERATOR"],
        default: "OPERATOR"
    }
})

module.exports = mongoose.model("User", userSchema)