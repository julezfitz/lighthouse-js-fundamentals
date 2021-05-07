function lastIndexOf(array, value) {
  let indexesArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === value) {
      indexesArray.push(i);
    }
  }
  console.log(indexesArray);
  if (indexesArray.length <= 0) {
    return -1;
  } else {
    return indexesArray.slice(-1).pop();
  }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
