const mongoose = require('mongoose')

const Mongodb = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("Database Connected")
    } catch (error) {
        console.log("Database Not Connected")
    }
}
module.exports = Mongodb