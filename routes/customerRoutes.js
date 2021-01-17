const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../midleware/joiSchemaValidation')
const customerSchema = require('../apiSchema/customerSchema')
const customerControll = require('../controller/customerController')

router.post('/',
    joiSchemaValidation.validateBody(customerSchema.createCustomerSchema),
    customerControll);


router.get('/',
    joiSchemaValidation.validateQueryParams(customerSchema.getCustomerListSchema),
    customerControll.getAllCustomerList)


module.exports = router;
