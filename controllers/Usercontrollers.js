// const Product = require('../models/Schema')

// exports.userpost = async (req, resp) => {
//     const result = new Product(req.body)
//     const data = await result.save()
//     console.log(data)
//     resp.send(data)

// const { name, email, phone, gender, status } = req.body;

// if (!name || !email || !phone || !gender || !status) {
//     resp.status(400).json({ error: "ALL Input is required" })
// }
// try {
//     const preuser = await Product.findOne({ email: email });
//     if (preuser) {
//         resp.status(400).json({ error: "This user is already Exsist" })
//     }
//     else {
//         // const dateCreated = moment(new date()).format("YYYY-MM-DD hh:mm:ss")
//         const userdata = new Product(req.body)
//         await userdata.save();
//         resp.status(200).json(userdata)
//     }
// }catch(error){
//     resp.status(404).json(error)
//     console.log("Catch Block")
// }
// }

const Product = require('../models/Schema')

const data = async (req, resp) => {
    const result = await Product.find();
    console.log(result);
     resp.status(200).send(result);


}
module.exports = data;