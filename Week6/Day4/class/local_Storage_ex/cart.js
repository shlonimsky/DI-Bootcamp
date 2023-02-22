// Bonus: use a Class to create each item
// When the user is done with his shopping, he will click on the "Pay button" (which is actually an tag) and it will redirect him to another 
// HTML page. This HTML page is linked to another Javascript file. Using the DOM display :

// all the items that the user bought : MANDATORY --> use object destructuring
// the total price he needs to pay
// a "Submit payment" Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.
// Bonus: the user can add multiple times, the same product. --> Each product item will be an object containing the name of the product, the price and the quantity.
// [134.99, 'Super Deluxe bagpack', 399.99, 'Smartphone', 1090.95, 'Super Duper Scooter', 499.98, 'Deluxe Bicycle']
(() => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const section = document.getElementById("cart")
    let sum=0;
    cart.forEach(item => {
        const div = document.createElement("div");
        const p1 = document.createElement("p");
        p1.textContent=item.name;
        const p2 = document.createElement("p");
        p2.textContent=item.price;
        div.appendChild(p1);
        div.appendChild(p2);
        section.appendChild(div)
        sum += item.price
    })
    const total = document.createElement("p")
    total.textContent=`Total amount: ${sum}`
    section.appendChild(total)

    const btn = document.querySelector('button')
    btn.addEventListener("click", purchase)

})()

function purchase(){
    const section = document.getElementById("cart")
    localStorage.clear();
    const p1 = document.createElement("p");
    p1.textContent="success"
    section.appendChild(p1)
    deleteAll()
}
function deleteAll(){
    const section = document.getElementById("cart")
    // section.classList.add("notVisible")
    do {
        section[0].remove()
    } while(section[0] !== null)
}