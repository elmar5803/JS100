let evenOrOdd = function(x){
  if (Number.isInteger(x)) {
    if (x % 2 === 0){
      console.log('even');
    }
    else {
      console.log('odd');
    }
  }  
  else{
    console.log("Not an integer");
  }
  }

evenOrOdd(3);
evenOrOdd(4);
evenOrOdd('a');