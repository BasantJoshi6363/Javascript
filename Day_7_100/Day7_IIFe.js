// immediately invoked function expression (IIFE)
// to reduce the global pollution we use IIFE 

// syntax for IIFE
// ()() ->function declaration under the parenethesis which help to reduce global pollution


(function myName(){
     let user = "admin"
    //  console.log(user);
})();

//note we must use semi colon at the end of the invoked function other wise it will show error to another invoked function 

(()=>{
    let myHobby = "cricket badminton"
    // console.log(myHobby);
})();


//how to pass the value to immediately invoked function

((name)=>{
    let myFavPerson = `${name}`
    console.log(myFavPerson);
})("Mommy")

// if we mention the name of iife function it will named iffi if not it will be simple iffi function 