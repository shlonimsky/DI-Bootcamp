const fs = require('fs')

// const data = fs.readFileSync('.env','utf-8');
// console.log(data);

// const data = fs.readFileSync('.env');
// console.log(data.toString());

// const info = fs.readFile('.env1','utf-8',(err,data) => {
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })
// console.log('The file has been read');

// const data = 'This is my Hello in a fil'
// /to crat a fil and add data
// fs.writeFile('hello',data,'utf-8',(rr) => {
//     if(rr){
//         console.log(rr)

//     }
//     else   {
//         console.log('file cratd'
//     }
// })

const products =[
    {id : 1,
    name : "iPhone",
    price : 800},
    {id : 2,
        name : "iPad",
        price : 650},
    {id : 3,
    name : "iWatch",
    price : 750},
    {id : 4,
        name : "MAC M1",
        price : 1500}
]

fs.writeFile('products.txt',JSON.stringify(products),'utf-8',(rr) => {
    if(rr) return console.log(rr);
    console.log('file cratd');
    
})

try{
    const data = fs.readFileSync('products.txt')
    console.log(JSON.parse(data.toString()))
} catch(err){
    console.log(err)
}

//copy a file

fs.copyFile('.env','.env2',(err) => {
    if (err){
        return console.log(err)
    } else (
        console.log('file copid')
    )
})
    

