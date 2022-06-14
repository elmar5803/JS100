let foo = null;
let bar = 'qux';
let isOK = (foo || bar) ? true : false;
console.log(isOK)