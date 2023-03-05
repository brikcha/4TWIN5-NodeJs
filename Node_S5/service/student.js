const Student = require('../models/student')

const save = (req, res, next) => {
    var student = new Student({name: req.body.nameStudent, age: req.body.ageStudent});
    student.save((err, std)=>{
        if(err){
            console.log(`There is an error ${err}`);
        } else {
             console.log(std);
            res.json(std);
        }
    });
    console.log('hello')
}

const getall =(req,res,next)=>{

    const std =Student.find((err,student)=>{
        if(err){
            console.log(`There is an error ${err}`);
        } else {
             console.log(student);
            res.json(student);
        }
    });
    console.log('hello')


}

const getbynom =(req,res,next)=>{

const std = Student.findOne({name:req.params.name},(err,result)=>{
    if(err){
        console.log(`There is an error ${err}`);
    } else {
         console.log(result);
        res.json(result);
    }
});
console.log('hello')


}


const update = (req, res, next) => {

    Student.updateOne({_id: req.params.id}, 
        {name:req.body.nameStudent}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{            
            res.json(docs);
        }
    });
}





module.exports = {save,getall,getbynom,update}