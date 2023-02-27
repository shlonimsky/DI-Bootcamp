// Exercise 1 : HTTP
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/
const http = require('http');
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Here is the first response</h1><h1>Here is the second response</h1><p>And here is the last response</p>");
})
server.listen(3000);
