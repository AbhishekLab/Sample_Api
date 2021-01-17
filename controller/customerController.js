const CustomerService = require('../service/customerService')
const constantValue = require('../constant/index')

module.exports.createCustomerList = async (req,res) => {
  let response = {...constantValue.defaultServerResponse};
  try {
    const responseFromService = await CustomerService.createCustomerList(req.body);
    response.status = 200;
    response.message = constantValue.productMesage.message;
    response.body = responseFromService;
    
  } catch (error) {
    response.message = error.message
    console.log('something went wrong controller create Product');
  }

  return res.status(response.status).send(response);
};



module.exports.getAllCustomerList = async (req,res) => {
    let response = {...constantValue.defaultServerResponse};
    try {
      const responseFromService = await CustomerService.customerList(req.query);
      response.status = 200;
      response.message = constantValue.productMesage.fetchedMessage;
      response.body = responseFromService;
      
    } catch (error) {
      response.message = error.message
      console.log('something went wrong controller Custoemrlist');
    }
  
    return res.status(response.status).send(response);
  };
