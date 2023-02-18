const express= require("express");
//const Contact = require("../database/models/contact.js");

// midelware gere route
const router= express.Router();
var Contact= require("../models/contact.js");

/*router.get("/",(req,res,next)=>{
     res.json({message: "hello"});
});*/


router.post("/",(req,res,next)=>{
    var contact = new Contact ({fullName: req.body.contactName , phone: req.body.contactNumber})
    contact.save((err, newContact)=>{
       if(err){
          console.log(" There is an error $(err) ");
       }else{
          res.json(newContact)
       }
    })
});

// get list
router.get("/",async(req,res,next)=>{
     try {
       contacts= await Contact.find();
       res.status(200).send(contacts);
   
     } catch (error) {
       res.status(400).send(error)
       
     }
   })

  // delete
  router.delete("/delcontact/:id",async(req,res,next)=>{
   try {
    id = req.params.id
    deletedContact = await Contact.findByIdAndDelete({_id:id});
    res.status(200).send(deletedContact)
   } catch (error) {
    res.status(400).send(error)
    
   }
 })

 // update 
 router.put("/uptcontact/:id",async(req,res,next)=>{
   try {
    id = req.params.id;
    newData = req.body;
    updated = await Contact.findByIdAndUpdate({_id:id},newData);
    res.status(200).send(updated);
   } catch (error) {
    res.status(400).send(error)
   }
 })
 
// get by id
router.get("/getbyid/:id",(req,res,next)=>{
   myid = req.params.id;
   Contact.findOne ({_id: myid})
   .then(
     (contact)=>{
        res.send(contact)
     }
   )
   .catch(
     (err)=>{
       res.send(err)
     }
   )
 })
  


module.exports= router;