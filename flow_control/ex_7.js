let stupidFunction = (string) => {
  if(string.length > 10){ 
    console.log(string.toUpperCase());
  }
  else{
    console.log(string);
  }
 }

 stupidFunction("words that are ten things or longer");
 
 stupidFunction("short");