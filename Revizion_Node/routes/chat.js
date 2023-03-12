const express= require("express");
var router = express.Router();
//const Chat = require('./models/chat');

/*const chatMessage = new Chat({
    pseudo: 'User1',
    message: 'Hello world!'
  });


  chatMessage.save((err, message) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Message saved successfully');
    }
  });*/

router.get("/",(req,res,next)=>{
res.render('chat');
})






module.exports= router;