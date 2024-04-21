require('dotenv').config()
const express = require('express')
const app = express()
const Mongodb = require('./db/conn')
const router = require('./routes/router')
const port = process.env.PORT || 9000


app.use(express.json());
app.use("/attire/e-comm/", router);

const start = async () => {
    await Mongodb(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Conecting ${port}`)
    })
}
start();