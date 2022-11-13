const toNumberArray = (stringArray) => {
  return stringArray.map(n => Number(n));
}

toNumberArray(["1","2","3"]);