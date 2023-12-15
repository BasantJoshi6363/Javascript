// "Hello World, how are you?", 
// "you? are how World, Hello".


// let word = "Hello World, how are you?"
// let reverseSentence = ()=>{
//   let newWord = word.split(" ").reverse().join(" ")
//  return newWord
// }
// console.log(reverseSentence())


// let temp;
// let arr= [1,2,3,4,5]
// for(let i = 0; i<arr.length; i++){
//   for(let j =1; j<arr.length; j++){
//     if(arr[i]>arr[j]){
//        temp  = arr[i]
//     }
//   }
// }
// console.log(temp)


// let arr = [1,2,3,4,5,6,7]
// let isSorted;

// for(let i=0; i<arr.length; i++){
//   for(let j=1; j<arr.length; j++){
//     if(arr[i]>arr[j]){
//       isSorted = 1;
//     }
//   }
// }
// if(isSorted==1){
//   console.log(true)
// }
// else{
//   console.log(false)
// }


// let arr = [1,2,3,1]
// let isSorted = true;

// for(let i=0; i<=arr.length; i++){
//   if(arr[i]>arr[i+1]){
//     isSorted = false; 
//     break; 
//   }
// }
// if(isSorted == true){
//   console.log(`${arr} is in Ascending order`)
// }
// else{
//   console.log(`${arr} not in order`)
// }

// check the how many vowel letter are there in string 

// u stress -> 

// d stress -> -> -> -> -> -> -> -> -> ->

// let vowel ="aeiouAEIOU"
// let count = 0 
// let mainWord = "apple ball cat dog apple"
// // console.log(mainWord.length)

// for(let i=0; i<mainWord.length; i++){
//   if(vowel.includes(mainWord[i])){
//     count++
//   }
// }
// console.log(count)

//find the second largest integer 
// console.log("hello world")
// let arr = [1,2,3,4,5,6]
// let arr2 = arr.sort()
// console.log(arr2)
// let temp; 

//largest value 

// for(let i =0; i<arr.length; i++){
//   if(arr[i]>arr[i+1]){
//     temp = arr[i+1]
//   }
// }
// console.log(temp)

//find the missing number 
// let sum
// let arr = [3,5,7,9]
//    for(let i=0; i<arr.length; i++){
//     for(let j=1; j<arr.length; j++){
//       if(arr(i)+arr(j)==i+j){
//         arr[i]
//       }
//     }
//   }
// console.log(sum)
// console.log(sum)
// for(let i =0; i<arr.length; i++){
//   sum = sum - arr[i];
// }
// console.log(sum)

let products = [
    {id : 1, name : "Laptop", price : 999999, inStock : true},
    {id : 1, name : "Headphone", price : 8765, inStock : false},
    {id : 1, name : "EarPhone", price : 566, inStock : true},
    {id : 1, name : "Cable", price : 123, inStock : false},
    {id : 1, name : "ps5", price : 65478, inStock : true}
  ]
    let filterInStockTrue =products.filter((value,i)=>{
      if(value.inStock === true && value.price > 10000){
        
   return value
      }
  }).map((value,i)=>{
      return {name : value.name , price : value.price}
  })
  
  // console.log(filterInStockTrue)
  
  let marksScoredByGpStudent = [
    {name : "prakash", marks : 80},
    {name : "ankit", marks : 99},
    {name : "kalankit", marks : 98},
    {name : "chadguru", marks : 100},
    {name : "harsh", marks : 87},
    {name : "sarthak", marks : 12},
    {name : "toodip", marks : 0}
  ].map((value,i)=>{
    return value
  })
  
  let filterWords = marksScoredByGpStudent.reduce((prev,cur)=>{
    if(prev.marks > cur.marks){
      return prev.marks
    }
    else{
      return cur.marks
    }
  })
  console.log(filterWords)
  
  
  