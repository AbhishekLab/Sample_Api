const User = require('../database/model/signUpModel');
const constants = require('../constant');
const { formateMongoDb } = require('../helper/dbHelper');
const jwt = require('jsonwebtoken');


module.exports.signUp = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error(constants.signUpMessage.dublicate);
    }
    //password = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password });
    let result = await newUser.save();
    return formateMongoDb(result);
  } catch (error) {
    console.log('Something went wrong: Service: signup', error);
    throw new Error(error);
  }
}

module.exports.login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    print(user);
    if (!user) {
      throw new Error(constants.loginMessage.loginError);
    }

    if(user.password != password){
      throw new Error(constants.invalid_password)
    }
    
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY || 'my-secret-key', { expiresIn: '1d' });
    return { token };
    
  
  } catch (error) {
    console.log('Something went wrong: Service: login', error);
    throw new Error(error);
  }

}