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
menu.forEach((obj, ind) => {
    console.log(obj.name)
   
    let isVegan = vegetarian.forEach((item,i) => {
        let RegEx= "/"+item+"/" 
       console.log(obj.name.match(RegEx))
    })
    console.log(isVegan)
})