const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    stockAvailable:Boolean,
    isPublished: Boolean,
    year:{type:Number,default:2021},
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPage:Number,
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

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