const fs = require("fs");
const test=require("./test.js");


fs.readFile("./message.text",'utf8',function(err,content){

});
//test();
//fs.readFile('./message.txt,'utf8',function(err,)
var content =fs.readFileSync('./message.text','utf8');
//console.log(content);
//console.log("hello TWIN5");
var read =require('read-file');
const functionone=()=>{
var read =require('read-file');
var content2=read.sync("./message.text",'utf8');

fs.writeFileSync('message2.txt',content2+"hadil");
console.log(content2);
}


const functiontwo=() =>{

read('./message.text','utf8',
function(err,content2){
    console.log(content2);
    fs.writeFile()
   
});
}

module.exports={
    functionone,
    functiontwo
}