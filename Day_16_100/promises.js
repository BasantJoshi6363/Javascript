// definition of sync and async
// if the code runner from top to bottom or as we can say line by line this is called sync code

// async-> all the async program run at a time and gives result when task is finished.

//timeout vaneko chai atti second paxi matra chalx
//set interval vaneko atti atti second ma chalirakhne
setTimeout(() => {
    // console.log("first")
}, 2000);
setTimeout(() => {
    // console.log("second")
}, 2000);
setTimeout(() => {
    // console.log("third")
}, 1000);
setTimeout(() => {
    // console.log("fourth")
}, 10);
//asynchronous stuff of js
//  XMLHttpRequest
//  setInterval
//  set Timeout
//  fetch
//  axios
//  promises

//how javascript behaves with sync and async.
//at first our synchronous code will run which is one main stack

//event loop check if there is asynchronous code or not
//if event loop found asynchronous code, it transfers it to the side stack 
//if all execution of main stack will complete then asynchronous code works.

                        //****** use of asynchronous code  ********/
// ->> yedi hamle kunai server lai request pathayau ra tesko response kaile aux vanne hamlai tha hudain ra response auna time lagne vayekole hamle response auna ko lagi asynchronous code lekhne garx.

//single threading and multi threading 
//js is single threaded language which means it can run only instruction at a time and multi threaded means it can run one or more instruction at a time.





//task to do
//open the door and close
//take off your shoe
//drink water
//eat food
//study

let task1= new Promise((resolve, reject) => {
    return resolve("open the door and close")
})

const task2 = task1.then((data)=>{
    // console.log(data)
    return new Promise((resolve, reject) => {
        return resolve("take off your shoe")
    })
})
let task3 = task2.then((data)=>{
    // console.log(data);
    return new Promise((resolve, reject) => {
        return resolve("drink water")
    })
})

let task4 = task3.then((data)=>{
    // console.log(data)
    return new Promise((resolve, reject) => {
        return resolve("eat food")
    })

})

let task5 = task4.then((data)=>{
    // console.log(data)
    return new Promise((resolve, reject) => {
        return resolve("study")
    })
})

let task6 = task5.then((data)=>{
    // console.log(data)
})

//this above program is the chain of promise.

// async await 

// async function myInfo(){
//      await console.log("hello")
// }

// console.log(myInfo())
// console.log("probably i am second.")