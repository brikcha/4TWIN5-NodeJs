const express= require("express");
const http= require("http");
var path= require("path"); // pour le socket
const chatRouter= require("./routes/chat.js");

var app= express();
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
       
        // pour partie 8 Afficher une notification lorsqu’un utilisateur est en train d’écrire un message
        // l’aide de l'événement &quot;onkeyup;
       /* io.on("connection", function (socket) {
            socket.on("typing", function (message) {
              socket.broadcast.emit("typing", message);
            });
          });*/
       
         
          

server.listen(3000,()=>console.log("server is run"));

