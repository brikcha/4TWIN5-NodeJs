const express =require('express')

const app =express()
const logger =require('morgan')
const createError = require('http-errors');
const mongoose = require('mongoose')
const student = require('./routes/student')

mongoose.connect('mongodb://localhost:27017/StudentDB')





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use('/student',student)


app.use((req, res, next) => {
    next(createError(404));
});




module.exports = app