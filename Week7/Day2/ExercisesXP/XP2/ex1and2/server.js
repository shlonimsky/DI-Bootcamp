// Exercise 1 : Express & JSON
// Instructions
// Create two files : server.js and script.js.
// In the server.js file, create an express server and a route /, using the GET method.
// Add the below Javascript Object in the handler function of the route: const user = { firstname: 'John',lastname: 'Doe'}
// Use your server to get the static HTML file from the public folder. Check out the lesson named Express Routes & Queries in the Course Notes, more specifically the part “How To Serve Static Files In Express”.
// Your server should run on http://localhost:3000/ to serve the HTML file.
// In the script.js file, fetch your server and get the response. The response should be the JSON Object. console.log this object and display it on the HTML.
// const express = require('express');
// const user = {
//     firstname: 'John',
//     lastname: 'Doe'
// };
// const app = express();

// app.listen(3000,() =>{
//     console.log('listening to port 3000')
//     console.log(__dirname)
// });

// app.use(express.static(__dirname+`/public`));

// app.get('/users', (req,res) => {
//     console.log(user)
//     res.json(user)
// })




// Exercise 2 : Express & Parameters
// In the server.js file, create your server using express.
// Create a route /, and use a GET request method.
// The path of the route should contain the route parameter id. Check out the lesson named Express Routes & Queries in the Course Notes.
// The handler function of the route should respond with the value of the route parameter. Check out req.params.
// Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
// The response on the page and on the console, should be a JSON Object
const express = require('express');
const app = express();
app.listen(3000, () => console.log('server is listening'));

app.get('/',(req,res) => {
    res.send('Exercise 2. You are in root. Please, go to /id (enter /1234)')
})

app.get('/:id',(req,res) =>{
    if (req.params.id == 1234){
        res.json({id:1234})
        console.log(JSON.stringify({id:1234}))
    } else {
        res.send('go to link http://localhost:3000/1234')
    }
})