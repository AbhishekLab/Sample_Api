const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../midleware/joiSchemaValidation')
const userSchema = require('../apiSchema/signUpSchema')
const userController = require('../controller/signUpController')




router.post('/signup', 
joiSchemaValidation.validateBody(userSchema.createSignUpSchema),
userController.signUp
)


router.post('/login',
joiSchemaValidation.validateBody(userSchema.createLogin),
userController.login
)

module.exports = router;
