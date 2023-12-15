// this keyword is used to define current context 

let info = {
    username : "basant Joshi",
    age : 20,
    isMarried : false,
    clgInfo : function info(){
        // console.log(this.username)
    }
}

info.clgInfo()

info.username = "prakash joshi"
// console.log(info);
// console.log(info.clgInfo())

// console.log(this)//if we call this in global it gives the window object

//if we call this inside function it gives many things

function myInfo (){
    let email= "basantjoshi6363@gmail.com"
    //  console.log(this.email); //gives the global object
}
myInfo()

//mostly context will work on object only other wise if we call it in functions it throws undefined.


//in arrow function this keyword will not work

let profile = ()=>{
    let profileImage ="12345678.jpeg"
    console.log(this.profileImage);
    //it will throw an error of undefined.
}

//arrow function 

// let addNumber = ()=>{}


//implicit arrow return function 
let myInfor = (num1,num2)=>(num1+num2)

console.log(myInfor(3,4));

let writeObjectInImplicitReturn = ()=>{{username : "Basant"}}

console.log(writeObjectInImplicitReturn());

//explicit arrow function 
let myInform = (num1,num2)=>{
    return num1*num2
}

console.log( myInform(2,3));
