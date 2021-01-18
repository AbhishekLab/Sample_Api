const mongoose = require('mongoose');


const customerListSchema = mongoose.Schema({
name : String,
email: String,
phone:String,
photo:String,
gender:String

},
{
    timestamps: true,

    //to change the _id and remove __v from the table
    toObject : {
        transform: function(doc, ret, options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});
module.exports = mongoose.model('Customer', customerListSchema);
