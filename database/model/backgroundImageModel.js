const { array } = require('@hapi/joi');
const mongoose = require('mongoose');


const backgroundImageSchema = mongoose.Schema({
image : Array

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
module.exports = mongoose.model('BackgroundImage', backgroundImageSchema);
