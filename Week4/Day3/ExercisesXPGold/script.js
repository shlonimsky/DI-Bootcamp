// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?
[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });
//   [2, 4, 6]

// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
//   [1, 2].concat([0, 1])=[1,2,0,1]
// [1,2,0,1].concat([2,3])=[1,2,0,1,2,3]

// Exercise 3 : Analyze This Code
// Instructions
// Using this code:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);

    return num * 2;
});
// What is the value of i ?
// Uncorrect question, because i get different values depending on iteration step.
// So it will be i=0, i=1, i=2, i=3, i=4, i=5

// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array 
const array1 = [[1],[2],[3],[[[4]]],[[[5]]]] ;
// and modify it to look like this array: [1,2,3,[4],[5]].
const newArray1 = array1.reduce((acc,el) => {return acc.concat(el)});
console.log(newArray1)
// Bonus Try to do it on one line.
// Using a method, take this array 
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
// and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
const newGreating = greeting.reduce((acc,str,index) => {
    return acc+str.join(" ")+" ";
}, "");
console.log(newGreating);
// Turn the trapped number 3 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
//  into: [3]
let newTrapped =trapped.reduce((acc,el) => {return acc.concat(el)},"")
const arrTrapped = [...newTrapped]
console.log(arrTrapped)
