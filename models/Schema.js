const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the product schema
const productSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    colors: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    shipping: {
        type: Boolean,
        default: false
    }
});

// Create a Mongoose model from the schema
const Product = mongoose.model('datas', productSchema);

module.exports = Product;
