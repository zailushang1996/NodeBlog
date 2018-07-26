var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title:String,
    category : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
})