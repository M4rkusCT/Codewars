const sumEvenNumbers = (input) => {
  return input.filter(n => Number(n) % 2 === 0).reduce((result,num) => { return result += num},0);
}

sumEvenNumbers([1,2,4,6,4,7,9,10]);