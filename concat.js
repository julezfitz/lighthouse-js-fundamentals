function concat(array1, array2) {
  if (array2.length >= 1) {
    for (let i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
    }
  }
  return array1;
}

concat([ 1, 2, 3 ], [ 4, 5, 6 ]);