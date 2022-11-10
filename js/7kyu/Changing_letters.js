const swap = (string) => {
  let vowels = ['a','e','i','o','u'];
  let arrString = [];
  for(let i = 0;i < string.length;i++) {
    if(vowels.includes(string[i])) {
      let vowel = string[i].toUpperCase();
      arrString.push(vowel);
    }
    else arrString.push(string[i]);
  }
  return arrString.join("");
}

swap("Hello people");