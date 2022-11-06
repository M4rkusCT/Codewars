function simpleMultiplication(number) {
    // your code........
  let result = 0;
  if(number % 2 === 0) {
    for(let i = 0;i < number;i++) {
     result += 8;
    }
  }
  else {
    for(let i = 0;i < number;i++) {
      result += 9;
    }
  }
  return result;
}

simpleMultiplication(8);