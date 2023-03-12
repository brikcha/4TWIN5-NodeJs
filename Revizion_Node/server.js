const app= require("./app.js");
const http = require("http");

const server= http.createServer(app);
server.listen(3000);