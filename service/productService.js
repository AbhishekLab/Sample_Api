const Product = require('../database/model/productModel')

module.exports.createProduct = async (serviceData)=>{
    try {
        let product = Product({...serviceData});
        let result = await product.save();
        return result.toObject();
    } catch (error) {
        console.log('service Prodct error');
        throw Error(error);
    }
}