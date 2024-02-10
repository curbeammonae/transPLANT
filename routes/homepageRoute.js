const express = require('express')
const router = express.Router()//express is doing routing for us
const homepageController = require('../controllers/homepageController.js')//this is the code located in our controllers folder, in our home file(this is how we run the code)


router.get('/', homepageController.getIndex) //router hands the request to the      homeController and runs the method of getIndex

module.exports = router