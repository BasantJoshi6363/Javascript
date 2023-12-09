//function is a block of code which we can call anywhere to reduce the code 

function myName(){
    let name = "Basant"
    return name
  }
  
  // console.log(myName())
  let fullName = "my name is " +myName() + " joshi"
  // console.log(fullName)
  
  
  //function have two important element they are arguments and parameters
  //parameters are those values which are initialized while declaring function under the parenthesis of function
  
  function hisName(par){
      return par
  }
  //above par is paramter of the function 
  
  
  //argument are those value which we pass to the function while calling the function
  // console.log(hisName("hello Basant")) // -> this is the example of function
  
  //in the js there are many types of function in js but we must use arrow function and normal function 
  
  //example of normal function 
  // function myFun (){}
  
  
  //example of arrow function
  // let myFun = ()=>{}
  
  // exercise for arrow function 
  
  
  // Arrow Function Question:
  
  // Write an arrow function called doubleNumbers that takes an array of numbers as input and returns a new array where each number is doubled.
  let arr = [1,2,3,4,5,6]
  
  let doubleArrayElement = arr.map((value)=>{
      return value*2
  })
  
  // console.log(doubleArrayElement)
  
  // Create a traditional function called calculateFactorial that takes a positive integer n as input and returns the factorial of that number.
  
  let factorial = 1
  function factorialOfNum(value){
      for(let i=1; i<=value; i++){
          factorial = factorial *i
      }
      return factorial
      
  
  }
  // console.log(factorialOfNum(5))
  
  // Create a function called getTicketCategory that takes two parameters: age (a number) and isStudent (a boolean indicating whether the person is a student or not). that distribute category
  
  
  function checkCategories(per){
      if(per>=10){
          console.log("Child")
      }
      else if(person >=15){
          console.log("Student")
      }
      else if(per >=20){
          console.log("Teen")
      }
      else{
          console.log("Adult")
      }
      return per
  }
  
  // console.log(checkCategories(10))