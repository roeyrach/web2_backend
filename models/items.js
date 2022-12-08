const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    items: {type: Array}
})

const Items = mongoose.model("Items", itemSchema);

module.exports =Items;