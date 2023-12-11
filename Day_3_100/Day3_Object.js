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


// console.log(personInfo);


//nesting the object 

let college = {
    collegeName : "Gp College",
    teacher : {
        teacherInfo :{
            headMaster : "Shiva Prasad Adhikari",
            coordinator : "Sujan Shrestha"
        }
    }
}
//we can access nested object using .
// console.log(college.teacher.teacherInfo);
// console.log(college.teacher.teacherInfo.headMaster);


//join two object together using spread operator 

let subject = {
    mainSubject : "Maths",
    favSubject : "Javascript",
    bestTechnology : "React"
}

let instructorName = {
    maths : "Gobinda Prasad",
    js : "Hitesh choudhary",
    reactJs : "Harsh sharma"
}
//joining using spread operator 

let holdObject = Object.assign({},subject, instructorName)

// console.log(holdObject);


let exArr1 = [1,3,4,5,6,7]
let exArr2 = [9,8,7,6,5,4]

let holdArray = [...exArr1, exArr2]
// console.log(holdArray);


let holdObjectWithSpread = {...college, ...instructorName}
console.log(holdObjectWithSpread);


//how to access the keys and value from object 
//object.keys(obj name) ->give keys
//object.values(obj name) ->give values
// console.log(Object.keys(subject))
// console.log(Object.values(subject))


//convert obj into array 
let myHobby = {
    favPerson : "Mother",
    hobby : "traveling",
    instrument : "playstation"

}
let holdingHobby = Object.entries(myHobby)
// console.log(holdingHobby);
