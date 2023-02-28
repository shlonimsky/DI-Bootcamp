// // Exercise 1 : Reading From A File In Node.JS
// // Create a text file and write something inside (example: ‘Some Text To See’)
// // Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal
const fs = require('fs')

try{
    fs.readFile('text.txt', "utf-8", (err,data) => {
        if(err) return console.log(err)
        else console.log(data)
    })
    console.log('file was read')
} catch(err){
    console.log(err)
}


// Exercise 2 : Writing Files With Node JS
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.
const content = 'Hello, I am a new text in a new file'
try{
    fs.writeFile("text2.txt", content, err => {
        if (err) return console.log(err)
        else console.log('file "text2" has been written')
    })
} catch(err){
    console.log(err)
}

// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)
const newContent = 'This data was changed in file "text2"'
try{
    fs.writeFile('text2.txt',newContent,(err) => {
        if (err) return console.log(err);
        else console.log('content was changed')
    })
    fs.readFile("text2.txt",'utf-8',(err,data) => {
        if (err) return console.log(err)
        else console.log(data)
    })
} catch (err){
    console.log(err)
}