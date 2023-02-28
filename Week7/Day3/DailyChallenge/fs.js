// Create an fs.js file and use the Node js File System to read the RightLeft file. In the file, you will see a list of symbols : > and <. 
// Each one of this symbol has a meaning:
// > means that you move 1 step to the right
// < means that you move 1 step to the left
const fs = require('fs');
const leftright = fs.readFileSync('RightLeft.txt','utf-8')
console.log(leftright)
console.log(typeof leftright)
let left = [];
let counter=0
for (let i = 0; i<leftright.length; i++){
    leftright[i]===">" ? counter++ : counter--;
    counter===-1 ? left.push(i): "";
}
console.log(`${counter} steps to the ${counter>0?"right":"left"}`)
console.log(`First time in left side happens in position ${left[0]}`)

