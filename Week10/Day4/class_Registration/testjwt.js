import jwt from 'jsonwebtoken';

const token = jwt.sign(
    // Ist param : payloadData (not sensetive data)
    {name : 'John',email : 'jj@d.d',userid : 234},
    //II nd param : my secret (like password)
    '@3$5^45',
    //III rd  param : 
    {expiresIn : '60s'}
)

// console.log(token);

//to verify the token
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiampAZC5kIiwidXNlcmlkIjoyMzQsImlhdCI6MTY3OTQ3MjM2NywiZXhwIjoxNjc5NDcyNDI3fQ.7rpbRydCBXhX2KFH1eFGhdsYejbjYQGh9IlGaO9lrSs`;

jwt.verify(token,'@3$5^45',(err,decoded) => {
    if(err) return console.log(err);
    console.log(decoded);
})