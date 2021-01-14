const mongoose = require('mongoose');

//logic for the connectivity
module.exports = async ()=>{
//connect
try {
    await mongoose.connect('mongodb://localhost/apiDb', {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Database connectivity establish');
} catch (error) {
    console.log('Database Connectivity Error',error);
    throw new Error(error);
} 
} 