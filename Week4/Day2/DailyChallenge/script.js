// Daily Challenge: Groceries
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. 
// Use the forEach method.
const displayGroceries = groceries.fruits.forEach(elem => console.log(elem))
// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. 
// (Tip : make the user variable equal to the client variable)
const cloneGroceries=()=>{
    let user=client;
    client = "Betty";
    const shopping = groceries;
    shopping.totalPrice=35
    shopping["other"]["payed"]=false
    console.log(groceries)
    console.log(shopping)
}
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// Yes, because they have the same adress in memory

// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Yes, because they have the same refference

// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
// Yes, because they have the same refference

// Invoke the cloneGroceries function.
cloneGroceries()
