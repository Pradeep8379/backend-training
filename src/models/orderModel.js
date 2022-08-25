const mongoose = require('mongoose');
const ObjectID= mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema( {
    user: ObjectID,
	product: ObjectID,
	amount:Number,
	isFreeAppUser: Boolean, 
	date:Date
}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema) 
