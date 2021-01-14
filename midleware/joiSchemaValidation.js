const Joi = require('@hapi/joi');
const constaint = require('../constant');

const validateObjectSchema = (data, schema) => {
        const result =  Joi.validate(data, schema, {convert:false});
        if(result.error){
            const errorDetail = result.error.details.map(value=>{
                return{
                    error : value.message,
                    path : value.path
                }
            });
            return errorDetail;
        }
        return null;
    
}

module.exports.validateBody = (schema) => {
    return(req,res,next) => {
        //validation
        const error = validateObjectSchema(req.body, schema);
        let response = {...constaint.defaultServerResponse};
        if(error){
            response.body = error;
            response.message = constaint.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
        
    }
}



module.exports.validateQueryParams = (schema) => {
    return(req,res,next) => {
        //validation
        const error = validateObjectSchema(req.query, schema);
        let response = {...constaint.defaultServerResponse};
        if(error){
            response.body = error;
            response.message = constaint.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
        
    }
}