const sum = (numbers) => {
  "use strict";
  return numbers.reduce((result,num) => { return result + num },0) ;
};

sum([3,2.4,2,-1]);