let rlSync = require('readline-sync');

let age = Number(rlSync.question("What is your age?\n"));

console.log( `You are ${age} years old.
In 10 years, you will be ${age + 10} years old.
In 20 years, you will be ${age + 20} years old.
in 30 years, you will be ${age + 30} years old.
in 40 years, you will be ${age + 40} years old.`)