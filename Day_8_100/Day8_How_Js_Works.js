//how javascript run the code ? 

//at first javascript will make global context 
//global context is like container 

//generally Global execution context have two working principle
// -> memory allotment phase
// -> Execution


//when we make a program in a javascript, it makes a global execution context and allocate the memory to the variable and pass undefined to the variable.After allocating the memory, code moves to the execution context where our code will take value and run with our given instruction 


//example for memory allocation 

// let name = "basant" //while memory allocation it will create memory space to write the data and pass undefined to the given variable 

//after execution phase value get placed to variable address then our codes work.


// if we work in function program it will be different scenario 
let val1 = 10
let val2 = 20
function addValues(num1,num2){
    let sum = num1 + num2
    return sum
}
console.log(addValues(val1,val2))
console.log(addValues(5,10))



