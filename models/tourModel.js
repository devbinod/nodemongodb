
let mongoose = require('mongoose');
let tourSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        required: true,
        type: Number
    },
    price: {
        type: Number,
        required: true
    }
});

let Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;