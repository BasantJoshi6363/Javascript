//array is the collection of element in programming 
//declaration of array
let arr = [6,7,8,9]
let newArr = Array(1,2,3)
// console.log(arr);
// console.log(newArr);

//push pop shift unshift
// add value in array using push pop

arr.push("hello")
// console.log(arr); // add item in array 

arr.pop()
// console.log(arr); //it remove the last element of arr 

arr.unshift("hello") // add value at the starting of array 
// console.log(arr);

arr.shift() // removes the first element of array 
// console.log(arr);

//Write a function that takes an array of numbers as a parameter and returns the sum of all the elements in the array.

let sumOfAllELement = (value)=>{
    let sum = 0
    for (let i = 0; i < value.length; i++) {
        sum += value[i];
        
    }
    return sum
}

// console.log(sumOfAllELement([1,2,3,4,5]));


//find the maximum value of array

//sum of all array element 


let findSumOfAllElement = (value)=>{
    let sum = 0
    for (let i = 0; i <value.length; i++) {
       sum +=value[i]
    }
    return sum
}
// console.log(findSumOfAllElement([1,2,3,4,5]));

//find the maximum number in array 

let maximumNumber = (value)=>{
    let largestNum = 0
    for (let i = 0; i < value.length; i++) {
        for (let j = 1; j < value.length; j++) {
            if(value[i]>value[j]){
                largestNum = value[i]
            } 
            else {
                largestNum = value[j]
            }           
        }
        
    }
    return largestNum
}
// console.log(maximumNumber([1,2,3,4,5,6,78]));

//make first word capital 
// console.log(name);
// console.log(makeFirstWordCapital([]))
let name1 = ["b","a","s","a","n","t"]
let makeFirstWordCapital = name1.map((value,i)=>{
    if(i===0){
        return value.toUpperCase()
    }
    else{
        return value.toLowerCase()
    }
})

   console.log(makeFirstWordCapital) 

//array function
//map reduce filter reverse sort
