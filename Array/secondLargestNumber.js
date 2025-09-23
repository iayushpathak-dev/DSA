const secondLargestElement = (array = []) => {
  const length = array.length;
  if (length === 0) {
    console.log("array is empty");
  }

  let largestNumber = -Infinity; // 3, 5
  let secondLargest = -Infinity; // Infinity , 1

  for (let i = 0; i < length; i++) {
    if (largestNumber < array[i]) {
      secondLargest = largestNumber;
      largestNumber = array[i];
    } else if (secondLargest < array[i]) {
      secondLargest = array[i];
    }
  }

  console.log(secondLargest, "findout my second largest");
  return secondLargest;
};

secondLargestElement([7, 3, 5]);
