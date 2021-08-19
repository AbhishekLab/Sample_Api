const userService = require('../service/signUpService')
const constantValue = require('../constant/index')

module.exports.signUp = async (req,res) => {
  let response = {...constantValue.defaultServerResponse};
  try {
    const responseFromService = await userService.signUp(req.body);
    response.status = 200;
    response.message = constantValue.signUpMessage.message;
    response.body = responseFromService;
    
  } catch (error) {
    response.message = error.message
    console.log('something went wrong  : SignUp not done');
  }

  return res.status(response.status).send(response);
};


module.exports.login = async (req,res) => {
  let response = {...constantValue.defaultServerResponse};
  try {
    const responseFromService = await userService.login(req.body);
    response.status = 200;
    response.message = constantValue.loginMessage.message;
    response.body = responseFromService;
    
  } catch (error) {
    response.message = error.message
    console.log('something went wrong  : Login not done');
  }

  return res.status(response.status).send(response);
};