const incrementer = (nums) => {
  if(nums.length === 0) return [];
  else {
    let newArrNumbers = [];
    let num = 1;
    let result = "";
    for(let i = 0;i < nums.length;i++) {
      result += nums[i] + num;
      if(Number(result) >= 10) {
        result = result.split("").splice(-1).join("");
        newArrNumbers.push(Number(result));
      }
      else newArrNumbers.push(Number(result));
      num++;
    }
    return newArrNumbers;
  }
}

incrementer([1,2,3,9,10]);