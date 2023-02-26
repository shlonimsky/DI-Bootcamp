//Lets create a server woth port 5001
const http = require('http')

const server_http = http.createServer((req,res)=>{
    console.log('Hello, get you request...') //to get this info in terminal call in url of browser
    // localhost:5001
    console.log(req.method)
    if(req.url === "/"){
        if (req.method === 'GET'){
            res.end('<h1>Home Page</h1>')
        } //else if (req.method === 'GET'){
            //go to0 database get some data end send it to user
        // }
    } else if( req.url === '/about'){
        res.end('<h1>About Page</h1>')
    } else {
        res.end('<h1>404 Page is not found</h1>')

    }
    // res.end('Hello from the server')
})

//create a port to listen the request of user that will come
// from user. we are on our localhost-our domain
server_http.listen(5001,()=>{
    console.log('Run on port 5001');
})