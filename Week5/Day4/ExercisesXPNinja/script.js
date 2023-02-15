// Exercise 1: Async Await & Try/Catch
// Instructions
// Add a try catch block to “Exercise XP Gold” in order to catch any errors.
// To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

const getData = async function() {
    try{
        const [ users, posts, albums ] = await Promise.all(urls.map( async (url) => {
            const a = await fetch(url)
            if (a.status !== 200){
                throw new Error(`ooooooops`)
            } else {
                return (await a.json()) 
            }
        }))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err){
        console.log(err)
    }
}
getData()


// // Exercise 2 : Analyze #4

// let resolveAfter2Seconds = function () { //5
//     console.log("starting slow promise"); //6
//     return new Promise(resolve => { //7
//         setTimeout(function () { //8
//             resolve("slow"); //10
//             console.log("slow promise is done"); //9
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () { //12
//     console.log("starting fast promise"); //13
//     return new Promise(resolve => {
//         setTimeout(function () {//14
//             resolve("fast"); //16
//             console.log("fast promise is done"); //15
//         }, 1000);
//     });
// };

// //The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

// let concurrentPromise = function () { //2
//     console.log('==CONCURRENT START with Promise.all=='); //3
//     return Promise.all([resolveAfter2Seconds(), //4
//         resolveAfter1Second()]) //11
//         .then((messages) => {  //17
//         console.log(messages[0]); //18  slow
//         console.log(messages[1]); //19 fast
//     });
// }

// setTimeout(concurrentPromise, 1000) //1
// Analyze the code provided above what will be the outcome?
// ==CONCURRENT START with Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done (finish quicklier because timet sets on 1s)
// slow promise is done(finish later because timet sets on 2s, so will finish after in 1s after the first timer)
// slow
// fast


// // Exercise 3 : Analyze #5
// let resolveAfter2Seconds = function () { //6
//     console.log("starting slow promise"); //8
//     return new Promise(resolve => { //10
//         setTimeout(function () { //12
//             resolve("slow"); //15
//             console.log("slow promise is done"); //15
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () { //7
//     console.log("starting fast promise"); //9
//     return new Promise(resolve => { //11
//         setTimeout(function () { //13
//             resolve("fast"); //14
//             console.log("fast promise is done"); //14
//         }, 1000);
//     });
// };

// let parallel = async function () {//2
//     console.log('==PARALLEL with await Promise.all==');//3
//     // Start 2 "jobs" in parallel and wait for both of them to complete
//     await Promise.all([ //4
//         (async () => console.log(await resolveAfter2Seconds()))(), //5
//         (async () => console.log(await resolveAfter1Second()))() //5
//     ]);
// }

// setTimeout(parallel, 5000) //1
// ==PARALLEL with await Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow



// Exercise 4 : Analyze #6
let resolveAfter2Seconds = function () { //5
    console.log("starting slow promise"); //6
    return new Promise(resolve => { //7
        setTimeout(function () { //8
            resolve("slow"); //16
            console.log("slow promise is done"); //17
        }, 2000);
    });
};

let resolveAfter1Second = function () { //9
    console.log("starting fast promise"); //10
    return new Promise(resolve => { //11
        setTimeout(function () {//12
            resolve("fast");//13
            console.log("fast promise is done");//14
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () { //2
    console.log('==PARALLEL with Promise.then=='); //3
    resolveAfter2Seconds() //4
    .then((message) => console.log(message)); //15
    resolveAfter1Second() //8
    .then((message) => console.log(message));  //18
}

setTimeout(parallelPromise, 3000) //1
// Analyze the code provided above what will be the outcome?
// ==PARALLEL with Promise.then==
// starting slow promise
//starting fast promise
// fast promise is done
//fast
// slow promise is done
// slow
// 
