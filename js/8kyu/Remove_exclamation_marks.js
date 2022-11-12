const removeExclamationMarks = (s) => {
  return s.split("").filter(s => s !== "!").map(s => s).join("");
}

removeExclamationMarks("Hello!");