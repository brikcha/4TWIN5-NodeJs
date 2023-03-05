const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const  Student = new Schema(


{
    name:String,
    age:Number,



}


)

module.exports =mongoose.model('students',Student)