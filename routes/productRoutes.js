var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController')
const joiSchemaValidation = require('../midleware/joiSchemaValidation')
const productSchema = require('../apiSchema/productSchema')


router.get('/all', joiSchemaValidation.validateQueryParams(productSchema.getProductSchema),
 productController.getAllProduct)


router.post('/',
 joiSchemaValidation.validateBody(productSchema.createProductSchema), 
 productController.createProduct);

router.get('/:id',
productController.getProductById)

router.put('/:id',
joiSchemaValidation.validateBody(productSchema.updateProductSchema),
productController.updateProduct)

router.delete('/:id', productController.deleteProductById)

 

module.exports = router;
