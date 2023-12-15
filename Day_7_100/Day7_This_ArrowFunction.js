// this keyword is used to define current context 

let info = {
    username : "basant Joshi",
    age : 20,
    isMarried : false,
    clgInfo : function info(){
        console.log(this.username)
    }
}

info.clgInfo()

info.username = "prakash joshi"
console.log(info);
console.log(info.clgInfo())

console.log(this)
