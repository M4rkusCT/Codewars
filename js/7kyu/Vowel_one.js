const vowelOne = (str) => {
  const newStr = str.toLowerCase();
  const arrVowels = ['a','e','i','o','u'];
  let arrVowelOne = [];
  for(let i = 0;i < newStr.length;i++) {
    arrVowels.includes(newStr[i]) === true ? arrVowelOne.push(1) : arrVowelOne.push(0);
  }
  return arrVowelOne.join("");
}

vowelOne("Hello");