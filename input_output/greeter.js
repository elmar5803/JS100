let rlSync = require('readline-sync');
let firstName = function(){
  return rlSync.question("What is your first name?\n")
  
}
let lastName = function(){
  return rlSync.question("What is your last name?\n")
  
}

console.log(`Hello, ${firstName()} ${lastName()}`);