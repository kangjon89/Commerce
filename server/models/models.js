const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: [true, "Product Name must be included"], 
        minlength: [3, "Name must me at least 3 characters"] },
    quantity: { type: Number, integer: [true, "Product quantity must be a Number!"], required: [true, "Stop hacking."], 
        min: [0, "Must start at 1!"], max: [1000, "1000 is the HIGHEST buying amount!"] },
    price: { type: Number, integer: [true, "Product pirce must be a Number!"], required: [true, "Stop hacking."], 
        min: [1, "Must start at $1.00!"], max: [1000000, "$1000000 is the HIGHEST buying amount!"] },
}, { timestamps: true } )

module.exports = mongoose.model('product', ProductSchema);