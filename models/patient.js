const mongoose = require('mongoose')

const patientsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Age:{
        type: String,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    medicalhistory:{
        type: String,
    },
    emergencycontact:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('patientsModel', patientsSchema)