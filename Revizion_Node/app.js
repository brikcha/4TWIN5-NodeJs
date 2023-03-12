// chat socket 
const http= require("http");
var path= require("path"); // pour le socket
const chatRouter= require("./routes/chat.js");

const express= require("express");
const logger= require("morgan");
const createError= require("http-errors");
const mongoose= require("mongoose");
const dbconfig= require("./database/mongodb.json");

const studentsRouter = require("./routes/students.js");

const app= express();
//chat 
app.set("views",path.join(__dirname,"views")); //pour voir fichier twig
app.set("view engine","twig");
app.use('/chat',chatRouter);

const server =http.createServer(app);
const io=require("socket.io")(server);

/*io.on('connection', function(socket) {
    console.log ('User Connected');
    });*/

    io.on('connection',(socket) =>{
        console.log ('User Connected');
        //socket.emit("msg","A new user is connected"); // une seule fois aff
        io.emit("msg","A new user is connected");
        socket.on("msg",(data)=>{
            io.emit("msg",data);
        })
        socket.on("disconnect",()=>{
            io.emit("msg","User disconnected...")
        })
        });


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/student",studentsRouter);

app.use((req,res,next)=>{
    next(createError(404));
})

mongoose.connect(dbconfig.mongo.uri);



module.exports=app;