const mongoose = require('mongoose');


const signUpSchema = mongoose.Schema({
email : String,
password: String
},
{
    timestamps: true,

    //to change the _id and remove __v from the table
    toObject : {
        transform: function(doc, ret, options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret;
        }
    }
});
module.exports = mongoose.model('User', signUpSchema);
