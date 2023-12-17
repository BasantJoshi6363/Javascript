//map reduce filer

//we can only use map method when we are working on array 
//it returns same amount of value given while input 

//map is a method which is used to iterate over the values and create a new array by using call back and doesn't change original values 

let myNum  = [1,2,3,4,5,6,7]

let addByTwo = myNum.map((value,i)=>{
    return value+2
})
//it doesn't change the original array 
// console.log(addByTwo);
// console.log(myNum);
//it creates a new array containing the result


let arr = [1,2,3,4,5].map((value,i)=>{
    return value
})
// console.log(arr);

// filter

//similarly filter is  array method which is used to modify our array according to need but it's doesn't change original value it returns in true and false. 

let myarr = [1,2,3,4,5,6,7]
let filterEven = myarr.filter((value,i)=>{
    if(value%2==0){
        return true
    }
    else{
        return false
    }

})
// console.log(filterEven);
// console.log(myarr);
//it's filter initialize array and create a new array and push all filtered value but doesn't change the original value of array


// reduce method is used to reduce an array to a single value applying call back to each items from left and right 

let arrFOrReduce = [1,2,3,4,5,6]

//let extract odd number and sum the value of odd number 

let filterOddNumber = arrFOrReduce.filter((value,i)=>{
    if(value%2!=0){
        return true
    }
    else{
        return false
    }
})

// console.log(filterOddNumber);

let sumOfOddNUmber = filterOddNumber.reduce((prev,cur)=>{
    return prev = prev+cur
},0)
//it works from left to right 
//it contain two parameter previous and current.
//previous is generally known as accumulator
//it doesn't change the original value 


// console.log(sumOfOddNUmber)
// console.log(arrFOrReduce);

//exercise map reduce filter methods 

//loop over array of string and extract the length of each word using map 

let str = ["hello","world","kaise","ho","k","x","kta","ho"]
console.log(str);

let countTheLengthOfString = str.map((items,i)=>{
    return items.length
})

// console.log(countTheLengthOfString);

//Words Longer Than 5 Characters: Take an array of words and filter out words that have more than 5 characters.

let words = ["lorem","piscum","basant","joshi"]

let filterAcoLength = words.filter((items,i)=>{
    if(items.length >=5){
        return true
    }
    else{
        return false
    }
})

console.log(filterAcoLength);

//find the maximum number in an array 

let values = [1,2,3,4,5,6,7,8,9]

let findMaximumNUmberInArray = values.reduce((prev,cur)=>{
    if(prev>cur){
        return prev
    }
    else{
        return cur
    }

},0)

// console.log(findMaximumNUmberInArray);