// Exercise 4 : My Book List
const allBBooks = [
    {
    title: "1984",
    author : "George Orwell",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1984first.jpg/440px-1984first.jpg",
    alreadyRead : true
    }, {
        title: "Spark of Life",
        author : "Erich Maria Remarque",
        image : "https://upload.wikimedia.org/wikipedia/en/1/12/SparkOfLife.jpg",
        alreadyRead : false
    }
    ]
    console.log(allBBooks[0]["title"])
// Using the DOM, render the books inside an HTML table 
// (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
const div = document.body.firstElementChild;
const tabbleTag = document.createElement("table")
// div.appendChild(tabbleTag)
for (let i=0; i<=allBBooks.length-1; i++){
tabbleTag.innerHTML += `
<tbody>
    <tr>
        <td>${allBBooks[i]["title"]} written by ${allBBooks[i]["author"]}</td>
        <td>
            <img src="${allBBooks[i]["image"]}" style="width:100px">
        </td>
        <td style="color:${allBBooks[i]["alreadyRead"]? 'red': 'black'}">${allBBooks[i]["alreadyRead"]}</td>
    </tr>
</tbody>
`
}
div.appendChild(tabbleTag)



// Solution with function
// const table = document.body.firstElementChild.firstElementChild
// // Create a loop for each book
// for (let book of allBBooks){
//     let i = 0; 
//     // creating <tr></tr>
//     let trTag = document.createElement("tr")
//     table.appendChild(trTag)
//     let tr = document.body.firstElementChild.children[i]
//     // loop for creating <tr> Content </tr>
//     for (let item in book){
//         rowInTable(book[item],i)
//     }
//     i++
// }

// // Function, that creats the rows
// function rowInTable (content,i){
//     let tdTag = document.createElement("td") 
//     // content === "image" ? imgTag = document.createElement("img") :
//     let columnContent = document.createTextNode(content)
//     tdTag.appendChild(columnContent)
//     document.body.firstElementChild.children[i].appendChild(tdTag)
// }
// let imgTag = document.createElement("img")

