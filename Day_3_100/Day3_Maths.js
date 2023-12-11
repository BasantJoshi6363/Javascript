//number 
// how to define only number using new keyword

let num = new Number(10)
// console.log(num);

//change the precision value 

let precisionVal = 100000000

// console.log(precisionVal.toPrecision());

// change number into String

let myNum = 1234567;
// console.log(myNum.toString()); //changed into string

let anotherVal = 100000000;

// console.log(myNum.toLocaleString("en-NEPAL"));


// math function 

let val = 123.9
// console.log(val.toFixed());
// toFixed() gives if value is low it give low if decimal is high it gives high


let anoVal = 876543.4;
// console.log(Math.ceil(anoVal));
//gives higher value

// console.log(Math.floor(anoVal));
//gives lower value
// console.log(Math.round(anoVal));

let myVal = 25
// console.log(Math.sqrt(myVal));


//math.random function 

let generateRandom  = Math.random()
console.log(generateRandom+1);
//here we gave +1 because math.random only gives number between 1 and 0 basically
// to avoid the zero
let min = 10
let max = 20

console.log(Math.floor(Math.random()*(min-max+1)+10));





