require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Schema');
const Productitem = require('./product.json')

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        await Product.deleteMany();
        await Product.insertMany(Productitem);
        console.log('Data import success');
        process.exit();

    }
    catch (error) {
        console.log(error)
    }
}
start();