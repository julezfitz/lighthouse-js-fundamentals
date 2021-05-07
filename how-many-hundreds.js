function howManyHundreds(num) {
  let remainder = num % 100;
  let result = (num - remainder) / 100;
  return result;
}