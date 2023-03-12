const express= require("express");
const student = require("../models/student.js");
//const Contact = require("../database/models/contact.js");

// midelware gere route
const router= express.Router();
var Student= require("../models/student.js");

/*router.get("/",(req,res,next)=>{
     res.json({message: "hello"});
});*/


/*router.post("/create",(req,res,next)=>{
    var student = new Student ({Name: req.body.studentName , Age: req.body.studentAge,Class:req.body.studentClass,Note:req.body.studentNote})
    student.save((err, newStudent)=>{
       if(err){
          console.log(" There is an error $(err) ");
       }else{
          res.json(newStudent)
       }
    })
});*/

router.post("/create",async(req,res)=>{
  try {
    data=req.body;
    stud=new Student(data);
    savedStu= await stud.save();
    res.status(200).send(savedStu)

  } catch (error) {
    res.status(400).send(error)
  }
})



// get list
router.get("/",async(req,res,next)=>{
     try {
       students= await Student.find();
       res.status(200).send(students);
   
     } catch (error) {
       res.status(400).send(error)
       
     }
   })

  // delete
  router.delete("/delstudent/:id",async(req,res,next)=>{
   try {
    id = req.params.id
    deletedStudent = await Student.findByIdAndDelete({_id:id});
    res.status(200).send(deletedStudent)
   } catch (error) {
    res.status(400).send(error)
    
   }
 })

 // update 
 router.put("/update/:id",(req,res)=>{
  id = req.params.id;
  newData = req.body;
  Student.findByIdAndUpdate({_id:id},newData)
  .then(
    (updated)=>{
      res.send(updated)
    }
  )
  .catch(
    (err)=>{
      res.send(err)
    }
  )

});


 
// get by id
router.get("/getbyid/:id",(req,res,next)=>{
   myid = req.params.id;
   Student.findOne ({_id: myid})
   .then(
     (student)=>{
        res.send(student)
     }
   )
   .catch(
     (err)=>{
       res.send(err)
     }
   )
 })
  
// findby name
router.get("/getbyname/:name", (req, res, next) => {
  const name = req.params.name;
  Student.findOne({ Name: name })
    .then((student) => {
      if (!student) {
        return res.status(404).send({ message: "Student not found" });
      }
      res.send(student);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

  // get student age > 18
  
 /*router.get("/age",async(req,res)=>{
    try {
      students= await Student.find({ Age: Age > 18 });
      res.send(students);
  
    } catch (error) {
      res.send(error)
      
    }
  })*/

  /*router.get("/age", (req, res, next) => {
    const age = req.params.age;
    Student.findOne({ Age: age >18 })
      .then((student) => {
        if (!age>18) {
          return res.status(404).send({ message: "Student not found" });
        }
        res.send(student);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  });*/


  router.get("/age", async (req, res, next) => {
    try {
      const ageLimit = 18;
      const students = await Student.find({ Age: { $gt: ageLimit } });
  
      if (!students || students.length === 0) {
        return res.status(404).send({ message: "No students found" });
      }
  
      res.send(students);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

  // delete student age < 18
  router.delete("/deleteSelonage", async (req, res, next) => {
    try {
      const ageLimit = 18;
      const result = await Student.deleteMany({ Age: { $lt: ageLimit } });
  
      if (result.deletedCount === 0) {
        return res.status(404).send({ message: "No students found to delete" });
      }
  
      res.send({ message: `${result.deletedCount} students were deleted` });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

  // la note devient note+2 a tous les students de classe 4Twin5
  

module.exports= router;