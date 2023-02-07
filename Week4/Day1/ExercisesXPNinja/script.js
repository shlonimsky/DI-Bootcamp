// Exercise 1 : Menu
const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]
//   Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
const isDessert = menu.some(obj =>  obj.type === "dessert")
console.log(isDessert);
//   Using an array method, check if all the elements in the array are starters.
const everyStarter = menu.every(obj =>  obj.type === "starter")
console.log(everyStarter);
//   Using an array method, check if there is at least one element in the array that is a main course. 
const isMain= menu.some(obj =>  obj.type === "main")
console.log(isMain);
// If not, add a main course of your choice to the array.
if (!isMain){
    menu.push({type : "main", name : "Pasta"})
}
console.log(menu);
// Using this array :
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should 
// be true if the name of the course contains at least one element from the vegetarian array.
menu.forEach(obj => {
  const course = obj.name.split(" ")
  obj["vegetarian"] =  course.some(el  => vegetarian.includes(el.toLowerCase()))
  })
  
  // Exercise 2 : Chop Into Chunks
  // Write a JavaScript function that takes 2 parameters: a string and a number.
  // The function should chop the string into chunks of your chosen length (the second parameter), and the 
  // outcome should be represented in an array.
  // Example:console.log(string_chop('developers',2)); 
// ["de", "ve", "lo", "pe", "rs"] 
function string_chop(string='developers',num=2){
  const arr = [...string]
  const chopedArr = arr.forEach((el,i)=> {
    let str="" 
    console.log(el)
  })
}
string_chop()

// Exercise 3 : You Said String ?
// Instructions
// Write a JavaScript function to find a word within a string.
search_word('The quick brown fox fox', 'fox'); 
// "'fox' was found 1 times."
function search_word(sentence,str){
  const tolow = sentence.toLowerCase()
  const sentArr = tolow.split(" ")
  let n=0
sentArr.forEach(word => word === str? n++: "")
   console.log(`${str} was found ${n} times`)
  }

// Exercise 4 : Reverse Array
// Instructions
// Write a function called reverseArray which accepts an array and returns the array 
// with all values reversed. See if you can do this without creating a new array!

const reverseArray = x => x.reverse();
console.log(reverseArray([1,2,3,4,5]), reverseArray([1,2]), reverseArray([]), reverseArray([1,2,3,4,5,6,7,8,9,10])  )

reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
reverseArray([1,2]) // [2,1]
reverseArray([]) // []
reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1]