const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name: {type: String},
    email: {type: String},
    address: {type: String},
    cart: {type: Array}
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports =Cart;