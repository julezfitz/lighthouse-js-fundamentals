function range(start, end, step) {
  let newRangeArray = [];

   if ((start > end) || (step <= 0) || (start === undefined) || (end === undefined) || (step === undefined)) {
     return newRangeArray;
   } else {
    for (let i = start; i <= end; i += step) {
      newRangeArray.push(i);
    }
    return newRangeArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));