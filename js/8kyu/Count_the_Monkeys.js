const monkeyCount = (n) => {
  let arrNumbers = [];
  for(let i = 1;i < n + 1;i++) {
    arrNumbers.push(i);
  }
  return arrNumbers;
}

monkeyCount(3);