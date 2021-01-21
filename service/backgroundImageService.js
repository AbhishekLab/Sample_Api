const BackgroundImage = require('../database/model/backgroundImageModel');
const constants = require('../constant');
const { formateMongoDb } = require('../helper/dbHelper');
const jwt = require('jsonwebtoken');



module.exports.createBackgroundImage = async (serviceData)=>{
    try {
        let backgroundImage = BackgroundImage({...serviceData});
        let result = await backgroundImage.save();
        return formateMongoDb(result)
    } catch (error) {
        console.log('service Prodct error');
        throw Error(error);
    }
}


module.exports.backgroundImage = async ({skip=0, limit=0})=>{
    try {
        let list = await BackgroundImage.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formateMongoDb(list);
    } catch (error) {
        console.log('service getting Prodct error');
        throw Error(error);
    }
}