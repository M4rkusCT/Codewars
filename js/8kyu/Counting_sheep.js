const countSheeps = (arrayOfSheep) => {
  // TODO May the force be with you
  let result = 0;
  for(let i = 0;i < arrayOfSheep.length;i++) {
    if(arrayOfSheep[i]) result++;
  }
  return result;
}

countSheeps([true, false, true, true]);