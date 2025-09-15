const largestElementArray = (array = []) => {
  const length = array.length;

  if (length === 0) {
    console.log("Array is empty");
    return;
  }

  let largestElement = -1;

  for (let i = 1; i < length; i++) {
    const value = array[i];

    if (largestElement < value) {
      largestElement = value;
    }
    i++;
  }

  console.log(largestElement, "largest element");
};

largestElementArray([1, 4, 5, 3, 6, 3, 2, 6, 12, 1, 5, 78, 0, 5]);
