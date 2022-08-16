const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    prices: {
        indianPrice: Number,
        europePrice: Number,
    },
    year:{type: Number, default: 2021},
    authorName: String, 
    tags: [String],
    totalPages :Number,
    stockAvailable: Boolean
    
}, { timestamps: true });


module.exports = mongoose.model('Book2', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
