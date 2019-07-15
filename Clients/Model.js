const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    client_id:  {
        type: String,
        required: true
    },
    name:  {
        type: String,
        required: true
    },
    address: {
        addressLine1: {
            type:String,
            required: true
        },
        addressLine2: {
            type:String,
            required: false
        },
        city: {
            type:String,
            required: true
        },
        state: {
            type:String,
            required: true
        },
        zipcode: {
            type:String,
            required: true
        }
    },
    phone: {
        type: Number,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    social_media: [],
    opening_hours: [],
    joinDate:  {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Client', ClientSchema);
