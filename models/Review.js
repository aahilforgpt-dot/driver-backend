const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    driverName: { type: String, required: true },
    tripDate: { type: Date, required: true },
    location: { type: String, required: true },
    reviewText: { type: String, required: true },
    rating: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
