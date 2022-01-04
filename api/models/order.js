const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    date: Date,
});

var Order = module.exports = mongoose.model('Orders', productSchema);

module.exports.get = function(callback,limit){
    Order.find(callback).limit(limit)
}