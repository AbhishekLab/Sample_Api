const constant = require('../constant');
const Product = require('../database/model/productModel')
const {formateMongoDb, checkObjectId} = require('../helper/dbHelper');

module.exports.createProduct = async (serviceData)=>{
    try {
        let product = Product({...serviceData});
        let result = await product.save();
        return formateMongoDb(result)
    } catch (error) {
        console.log('service Prodct error');
        throw Error(error);
    }
}

module.exports.allProduct = async ({skip=0, limit=0})=>{
    try {
        let product = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formateMongoDb(product);
    } catch (error) {
        console.log('service getting Prodct error');
        throw Error(error);
    }
}

module.exports.getProductById = async ({id})=>{
    try {
        checkObjectId(id);
        let product = await Product.findById(id);
        if(!product){
            throw new Error(constant.productMesage.productNotFound);
        }
        return formateMongoDb(product);
    } catch (error) {
        console.log('service getting Prodct error');
        throw Error(error);
    }
}


module.exports.updateProduct = async ({id, updateInfo})=>{
    try {
        checkObjectId(id);
        let product = await Product.findOneAndUpdate(
            {_id : id},
            updateInfo,
            {new : true}
        )
        if(!product){
            throw new Error(constant.productMesage.productNotFound);
        }
        return formateMongoDb(product);
    } catch (error) {
        console.log('service getting Prodct error');
        throw Error(error);
    }
}

module.exports.deleteProductById = async ({id})=>{
    try {
        checkObjectId(id);
        let product = await Product.findByIdAndDelete(id)
        if(!product){
            throw new Error(constant.productMesage.productNotFound);
        }
        return formateMongoDb(product);
    } catch (error) {
        console.log('service getting Prodct error');
        throw Error(error);
    }
}
