const express= require("express");
const logger= require("morgan");
const createError= require("http-errors");
const mongoose= require("mongoose");
const dbconfig= require("./database/mongodb.json");

const contactsRouter = require("./routes/contacts.js");

const app= express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/contact", contactsRouter);

app.use((req,res,next)=>{
    next(createError(404));
})

mongoose.connect(dbconfig.mongo.uri);

module.exports=app;