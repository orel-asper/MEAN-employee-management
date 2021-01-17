const { Router } = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Define collection and schema

let Employee = new Schema({
    name: {
        type: String , required: true
    },
    email: {
        type: String, required: true
    },
    designation: {
        type: String, required: true
    },
    phoneNumber: {
        type: String, required: true
    },
},
    { collection: 'employees' },
    { timestamps: true }
)


module.exports = mongoose.model('Employees' , Employee)