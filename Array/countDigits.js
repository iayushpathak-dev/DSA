function countDigitNumber(digit, counter = 0) {
  if (digit === 0) {
    return counter;
  }

  return countDigitNumber(Math.floor(digit / 10), counter + 1);
}

const data = countDigitNumber(12345);
console.log(data, "Data>>>>>>>>>>>>>>>>>>>>>>>>>s>>>>>>>>>>>>>>>");


// used recursion to achieve this...