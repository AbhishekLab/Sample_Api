const mongoose = require('mongoose');
const constant = require('../constant');

//logic for the connectivity
module.exports = async ()=>{
//connect
try {
    await mongoose.connect("mongodb+srv://TheImortal:EDrQ25l40aKLBAgc@cluster0.uo2op.mongodb.net/Sample-Api?retryWrites=true&w=majority",
     {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Database connectivity establish');
} catch (error) {
    console.log('Database Connectivity Error',error);
    throw new Error(error);
} 
} 