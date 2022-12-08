const arrayPlusArray = (arr1, arr2) => {
  const result1 = arr1.reduce((r,n) => { return r + n }, 0);
  const result2 = arr2.reduce((r,n) => { return r + n }, 0);
  return result1 + result2;
}

arrayPlusArray([1,2,3],[4,5,6]);