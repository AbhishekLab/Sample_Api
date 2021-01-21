const { backgroundImage } = require("../service/backgroundImageService");

module.exports = {
    defaultServerResponse :{ 
        status : 400,
        message : '',
        body:{}
    },
    productMesage:{
        message: 'Product Created Successfully',
        fetchedMessage : 'Product Fetch Sucessfully',
        productNotFound: 'Product Not Found',
        updateProduct : 'Update Product Sucessfully',
        deleteProduct : 'Delete Product Sucessfully'
    },
    signUpMessage : {
        message : 'Sign Up Sucessfully',
        dublicate : 'Email id already exist'
    },
    loginMessage :{
        message:'Login Sucessfully',
        loginError: 'User Not Found'
    },
    requestValidationMessage : {
        BAD_REQUEST : 'Invalid Fields',
        TOKEN_MISSING : 'Token Missing'
    },
    databaseMessage :{
        dbError : 'Inavild Id'
    },
    registerUser: {
        message:'Register Sucessfully',
        errorMessage:'Register Failed'
    },
    backgroundImage : {
        message : 'Image Uploaded '
    }
    
};  