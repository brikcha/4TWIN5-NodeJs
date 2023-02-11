var http =require('http');
var url= require('url');


const { title } = require('process');

/* var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<!Doctype html>' +'<html>' + 
'<head>'+
'<meta charset-"utf8" />'+
'<title> Ma page Node.js !</title>'+
'</head>'+
'<body>'+
 '   <p>voici un paragraphe <strong> HTML </strong>!</p>'+
'</body>'+
'<html>');
    
    res.end();
});

server.listen(8080);*/

/*var server=http.createServer(function(req,res){
    var page =url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{"Content-Type":"text/plain"});

 if (page =='/'){
    res.write('vous etes dans la page acceuil');
} else if(page =='/contact'){
    res.write('vous etes dans la page contact!');
}else if (page =='/Affichage/1/user'){
    res.write('Afficher l\'utilisateur qui a l\'id 1 !');
}
res.end();
});
server.listen(8080); */
var http =require('http');
var url =require('url');
var querystring=require('querystring');

var server=http.createServer(function(req,res){

var params =querystring.parse(url.parse(req.url).query);
res.writeHead(200,{"Content-Type":"text/plain"});
if ('id' in params && 'login' in params){
    res.write('votre id est'+ params['id'] 
    + 'et votre login est' +params['login']);}
    else{
        res.write('veuillez saisir votre id et login !');
    }
res.end();
});
server.listen(8080);



