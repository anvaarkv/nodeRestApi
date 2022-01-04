const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

var Product = module.exports = mongoose.model('Product', productSchema);

module.exports.get = function(callback,limit){
    Product.find(callback).limit(limit)
}