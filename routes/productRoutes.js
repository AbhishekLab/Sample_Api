var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController')
const joiSchemaValidation = require('../midleware/joiSchemaValidation')
const tokenValidation = require('../midleware/tokenValidation')
const productSchema = require('../apiSchema/productSchema')


router.get('/',
    tokenValidation.valodateToekn,
    joiSchemaValidation.validateQueryParams(productSchema.getProductSchema),
    productController.getAllProduct)


router.post('/',
    tokenValidation.valodateToekn,
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct);

router.get('/:id',
    tokenValidation.valodateToekn,
    productController.getProductById)

router.put('/:id',
    tokenValidation.valodateToekn,
    joiSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.updateProduct)

router.delete('/:id', 
tokenValidation.valodateToekn,
productController.deleteProductById)

module.exports = router;
