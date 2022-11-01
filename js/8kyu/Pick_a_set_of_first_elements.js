const first = (arr, n) => {
  // return arr;
  let result = [];
  
  if(n === undefined) {
    result = arr.slice(0,1);
  }
  else if(n !== 0 && n !== undefined) {
    result = arr.slice(0,n);
  }
  
  return result;
}

first(['a', 'b', 'c', 'd', 'e'], 2);