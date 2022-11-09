const getCount = (str) => {
  let num = 0;
  const arrVowels = ['a','e','i','o','u'];
  const newStr = str.toLowerCase();
  for(let i = 0;i < newStr.length;i++) {
    arrVowels.includes(newStr[i]) === true ? num++ : 0;
  }
  return num;
}

getCount("Hello");