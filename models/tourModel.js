
let mongoose = require('mongoose');
let tourSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    durations: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
    },

    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default : 0
    },

    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty']
    },
    rating: {
        required: true,
        type: Number
    },
    price: {
        type: Number,
        required: true
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim : true
    },
    description: {
        type: String,
        trim: true,
        required : [true, 'A tour must have a description']
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDate: [Date]
});

let Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;