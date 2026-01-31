const mongoose = require("mongoose")

const requestSchema = new mongoose.Schema({
    minValue: {
        type: Number,
        required: true
    },
    maxValue: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "APPROVED", "REJECTED"],
        default: "PENDING"
    },
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reviewedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    requestedAt: {
        type: Date,
        default: Date.now
    },
    reviewedAt: {
        type: Date
    }
})

module.exports = mongoose.model("Request", requestSchema)