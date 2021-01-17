const Customer = require('../database/model/customerListModel');
const constants = require('../constant');
const { formateMongoDb } = require('../helper/dbHelper');
const jwt = require('jsonwebtoken');



module.exports.createCustomerList = async (serviceData)=>{
    try {
        let customer = Customer({...serviceData});
        let result = await customer.save();
        return formateMongoDb(result)
    } catch (error) {
        console.log('service Prodct error');
        throw Error(error);
    }
}


module.exports.customerList = async ({skip=0, limit=0})=>{
    try {
        let list = await Customer.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formateMongoDb(list);
    } catch (error) {
        console.log('service getting Prodct error');
        throw Error(error);
    }
}