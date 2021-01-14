const productService = require('../service/productService')
const constantValue = require('../constant/index')

module.exports.createProduct = async (req,res) => {
  let response = {...constantValue.defaultServerResponse};
  try {
    const responseFromService = await productService.createProduct(req.body);
    response.status = 200;
    response.message = constantValue.productMesage.message;
    response.body = responseFromService;
    
  } catch (error) {
    response.message = error.message
    console.log('something went wrong controller create Product');
  }

  return res.status(response.status).send(response);
};


module.exports.getAllProduct = async (req,res) => {
  let response = {...constantValue.defaultServerResponse};
  try {
    const responseFromService = await productService.allProduct(req.query);
    response.status = 200;
    response.message = constantValue.productMesage.fetchedMessage;
    response.body = responseFromService;
    
  } catch (error) {
    response.message = error.message
    console.log('something went wrong controller create Product');
  }

  return res.status(response.status).send(response);
};

module.exports.getProductById = async (req,res) => {
  let response = {...constantValue.defaultServerResponse};
  try {
    const responseFromService = await productService.getProductById(req.params);
    response.status = 200;
    response.message = constantValue.productMesage.fetchedMessage;
    response.body = responseFromService;
    
  } catch (error) {
    response.message = error.message
    console.log('something went wrong controller create getProductById');
  }

  return res.status(response.status).send(response);
};





