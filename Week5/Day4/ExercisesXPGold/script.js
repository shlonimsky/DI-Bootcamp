// Exercise 1: Analyze #2
let resolveAfter2Seconds = function () { //4
    console.log("starting slow promise"); //5
    return new Promise(resolve => { //9
        setTimeout(function () { //6
            resolve("slow");  //8
            console.log("slow promise is done"); //7
        }, 2000);
    });
};

let resolveAfter1Second = function () { //11
    console.log("starting fast promise"); //12
    return new Promise(resolve => { 
        setTimeout(function () {//13
            resolve("fast"); //15
            console.log("fast promise is done"); //14
        }, 1000);
    });
};

let sequentialStart = async function () { //2
    console.log('==SEQUENTIAL START==');  //3
    const slow = await resolveAfter2Seconds(); //4
    console.log(slow); //10
    const fast = await resolveAfter1Second(); //11
    console.log(fast); //16
}

sequentialStart() //1
// Analyse the code provided above before executing it - what will be the outcome?
// '==SEQUENTIAL START=='
// "starting slow promise"
// "slow promise is done"
// "slow"
// "starting fast promise"
// "fast promise is done"
// "fast"


// Exercise 2: Analyze #3
let resolveAfter2Seconds2 = function () { //5
    console.log("starting slow promise"); //6
    return new Promise(resolve => {//8
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done"); //7
        }, 2000);
    });
};

let resolveAfter1Second2 = function () { //10
    console.log("starting fast promise"); //11
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");//13
            console.log("fast promise is done"); //12
        }, 1000);
    });
};

let concurrentStart2 = async function () { //2
    console.log('==CONCURRENT START with await=='); //3
    const slow = resolveAfter2Seconds2(); //4
    const fast = resolveAfter1Second2(); //9
    console.log(await slow); //14
    console.log(await fast); //15
}

setTimeout(concurrentStart2, 4000) //1

// Analyse the code provided above before executing it - what will be the outcome?
'==CONCURRENT START with await=='
"starting slow promise"
"slow promise is done"
"starting fast promise"
"fast promise is done"
"slow"
"fast"



// Exercise 3 : Modify Fetch With Async/Await
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

const getData = async function() {
    const [ users, posts, albums ] = await Promise.all(urls.map( async (url) => {
        const a = await fetch(url)
        return (await a.json())
    }))
console.log('users', users);
console.log('posts', posts);
console.log('albums', albums);
}

getData()

// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Don’t get discouraged… this is a really tough one…
// async function getDataModify(){
//     try{
//         const [ users, posts, albums ] = await Promise.all(
//             urls.map(url => {
//             const data1 = await fetch(url);
//             const data2 = await data1.json();
//         }))
//     } catch (err){
//         console.log(err)
//     }
// }



