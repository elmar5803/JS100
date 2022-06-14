let rlSync = require('readline-sync');
let multiply = function(){
  return rlSync.question("Enter First Number:\n")
}
let multiply2 = function(){
  return rlSync.question("Enter Second Number:\n") 
}

let finalMultiply = function(x, y){
  return x * y
}
console.log(`${finalMultiply(multiply(), multiply2())}`)