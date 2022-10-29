const findAverage = (array) => {
  // your code here
  if(array.length > 0) {
    let newArr = array.reduce((result, item) => {
      return result + item;
    }, 0);
    return parseFloat(newArr/array.length);
  }
  else return 0;
}

findAverage([3,4,5,6,3]);