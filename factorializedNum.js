function factorialize(num) {
  // if number = 0 or 1 return 1
  if (num === 0 || num === 1) {
    return 1;
  }
  // start a for loop to iterate through each number and decrement by 1
  for (var i = num - 1; i >= 1; i--) {
    // multiply each number by i which is decreasing by 1
    num *= i;
  }
  return num;
}

factorialize(5);
factorialize(20);