const repeatStr = (n, s) => {
  let newString = "";
  for(let i = 0;i < n;i++) {
    newString += s;
  }
  return newString;
}

repeatStr(3, "s");