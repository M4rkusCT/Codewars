const basicOp = (operation, value1, value2) => {
    // Code
    switch(operation) {
        case "+":
            return parseFloat(value1 + value2);
        case "-":
            return parseFloat(value1 - value2);
      case "*":
            return parseFloat(value1 * value2);
      case "/":
            return parseFloat(value1 / value2);
      default:
            alert("You have to choose an operation.");
            break;
    }
}

basicOp("+", 2, 3);