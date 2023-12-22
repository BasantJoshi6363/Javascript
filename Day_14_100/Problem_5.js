// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

function sumOfArray(value){
   let sum =  value.reduce((prev,cur)=>{
        return prev+=cur
    },0)
    return sum
}

// console.log(sumOfArray([2,3,4,5,6,7,8,9]))

// Create a function that reverses a given string. For example, inputting "hello" should return "olleh".


function reverseString(value){
   return value.split("").reverse().join("")
}

//  console.log(reverseString("hello"));


// Write a function that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers less than or equal to n.

let num = 5
let factorial = 1

for(i=1; i<=num; i++){
    factorial = factorial*i
}
// console.log(factorial)

// Create a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

function checkIsPalindrome(value){
    let reverseValue= value.split("").reverse().join("")

    if(reverseValue===value){
       console.log(`${value} is palindrome`);
        return true
    }
    else{
        console.log(`${value} is not palindrome`)
        return false

    }


}
// console.log(checkIsPalindrome(("mom")));


//Implement a function to check whether a given number is a prime number or not. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function checkPrime(number){
    if(number<2){
        console.log(number +"is not prime number")
        return false
    }
    for (let i = 2; i <Math.sqrt(number); i++) {
        if(number%i==0){
            console.log(number +"is not prime number")
            return false
        }
        
    }
    if(true){
        console.log(`${number} is prime number`)
    }
    return true

}
console.log(checkPrime(10))