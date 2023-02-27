// Exercise 1 : HTTP
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/
const express = require('express');
const app=express();
app.get("/", (req,res) => {
    res.send("<h1>Here is the first response</h1>");
    res.send("<h1>Here is the second response</h1>")
    res.send("<p>And here is the last response</p>")
})
app.listen(3000);