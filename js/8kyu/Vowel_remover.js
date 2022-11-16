function shortcut (string) {
  let arrVowels = ["a","e","i","o","u"];
  return string.split("").filter(s => !arrVowels.includes(s)).map(s => s).join("");
}

shortcut("Codewars");