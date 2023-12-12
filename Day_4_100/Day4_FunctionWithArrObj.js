let info = {
    username : "Basant",
    age : 20,
    isMarried : false
}
function giveInformation(myInfo){
    return `name is ${myInfo.username} age is ${myInfo.age} and Marital status is ${myInfo.isMarried}`
}
// console.log(giveInformation(info));

//another technic to pass object in function 

function collegeInfo(clgInfo){
    return `fav teacher ${clgInfo.favTeacher}, total number of teacher are ${clgInfo.NOOfTeacher}, English teacher is ${clgInfo.englishTeacher}`
}
// console.log(collegeInfo({
//     favTeacher : "Gobinda Khaniya",
//     NOOfTeacher : 5,
//     englishTeacher : "English sir",
//     strictTeacher : "sujan Shrestha"
// }));


//passing array into the function 

let priceOfProducts = [100,2000,500,6000]

function allItemsPrice(...price){
    return price
}
console.log(allItemsPrice(priceOfProducts));