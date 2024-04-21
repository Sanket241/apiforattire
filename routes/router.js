const express = require('express');
const router = express.Router();    

const data = require('../controllers/Usercontrollers');

router.route("/products").get(data);

module.exports = router;
