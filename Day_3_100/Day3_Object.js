//object is defined which has unique attribute and behavior.
//defining object 

//object has it's value and pair 

// let obj = {} ->declaration of object 

let myInfo = {
    name : "Basant",
    age : 20,
    isLoggedIn : false
}

//process to define singleton object is 
let info = new Object("iam basant joshi")
// console.log(info);

//define symbol in object 
const greet = Symbol("hello")

let infoMine = {
    name : "prakash",
   [greet]: "hello",
    isMarried: false,
    gmail : Symbol("basant@google.com"),
    age : 20
}
// console.log(infoMine);
// we must give sqaure bracket to get access of symbol
// console.log(infoMine[greet])


//process to take data from object

let personInfo = {
    name : "Basant joshi",
    gmail : "joshibasant@microsoft.com",
    nationality : "nepali",
    password : "password@123",
    number : 9876543210,
   " full address " : "Dhangadi,Kailali"

}
// console.log(personInfo);
// console.log(personInfo[" full address "]);

//using .
//usingSqaurebracket 

//we can freeze object to avoid the changes in the object 
Object.freeze(personInfo)
personInfo.password = "hello.txt"
// changes cannot seen 


console.log(personInfo);
