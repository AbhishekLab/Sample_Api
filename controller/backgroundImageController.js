const BackgroundService = require('../service/backgroundImageService')
const constantValue = require('../constant/index')

module.exports.createbackgroundImages = async (req,res) => {
  let response = {...constantValue.defaultServerResponse};
  try {
    const responseFromService = await BackgroundService.createBackgroundImage(req.body);
    response.status = 200;
    response.message = constantValue.backgroundImage.message;
    response.body = responseFromService;
    
  } catch (error) {
    response.message = error.message
    console.log('something went wrong controller create Customer');
  }

  return res.status(response.status).send(response);
};



module.exports.getAllBackgroundList = async (req,res) => {
    let response = {...constantValue.defaultServerResponse};
    try {
      const responseFromService = await BackgroundService.backgroundImage(req.query);
      response.status = 200;
      response.message = constantValue.backgroundImage.fetchedMessage;
      response.body = responseFromService;
      
    } catch (error) {
      response.message = error.message
      console.log('something went wrong controller Custoemrlist');
    }
  
    return res.status(response.status).send(response);
  };
