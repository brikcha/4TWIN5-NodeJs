const fs =require('fs');//file system
const { get } = require('http');

module.exports=function test(){
try{
   fs.appendFileSync('message.text','Bonjour NODE JS');
   console.log('Message "Bonjour NODE JS" : ajouté');
} catch(err){
   console.log(err);
}

}

/*console.log('Debut')
setTimeout(() => {
   console.log('Voici 2 secondes/ dattente')
},2000)
console.log('Fin') */

setTimeout(function(){
   console.log("A");
},1000);

setTimeout(function(){
   console.log("B");
},0);


setTimeout(function(){
      console.log("c");
   },1000);
  
   setTimeout(function(){
      console.log("D");
   },1000);

 console.log("E")  






