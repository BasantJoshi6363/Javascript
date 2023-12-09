//conditional are the block of the code which help to execute our program in different condition

// if(true) //do something else do something next

// if(false) console.log("hello world i am true.") 
// else console.log("hello world i am false.")

// only else will execute when if condition is false
let a = 10, b =10
if(a>b){console.log(a)} else if (a==b){console.log("they are equal")} else{console.log(b)}

/*
 calculateGrade that takes a score as input and returns the corresponding letter grade based on the following grading scale:
90 or above: 'A'
80-89: 'B'
70-79: 'C'
60-69: 'D'
Below 60: 'F'

*/
let totalPer = 87 //this is the value from user

if(totalPer >=90){
    console.log("A")
}
else if(totalPer>=80){
    console.log("B")
}
else if(totalPer>=70){
    console.log("C")
}
else if(totalPer>=80){
    console.log("D")
}
else {
    console.log("F")
}


