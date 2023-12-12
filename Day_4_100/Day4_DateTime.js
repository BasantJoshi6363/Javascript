//date and time 

let createDate = new Date()
// console.log(createDate.toDateString());
// console.log(createDate.toString());
// console.log(createDate.toISOString());
// console.log(typeof createDate)



let myDate = Date()
// console.log(myDate);
// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleUpperCase());


let timeStamp = new Date()
// console.log(Date.now()) // this is in milli second
// console.log(Math.floor(Date.now()/1000)) // this is in second



// let createOwnDate = new Date("2023 11 26, 12: 12")
// console.log(createOwnDate.toLocaleString());

// in indian standard

let createInIndianStandard = new Date("12 11 2021")
console.log(createInIndianStandard.toLocaleString());


// let getMonth = new Date ()