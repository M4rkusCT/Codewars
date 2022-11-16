const removeChar = (str) => {
  let arrStr = str.split("");
  arrStr.pop();
  arrStr.shift();
  return arrStr.join("");
};

removeChar("People");