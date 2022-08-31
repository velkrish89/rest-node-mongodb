const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usesSchema = new Schema({
    
    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    occupation: {
        type: String
    },

    subscription: {
        type: Boolean,
        default: false
    } 
});

module .exports = mongoose.model('users', usesSchema);