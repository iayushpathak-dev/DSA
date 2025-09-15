// write a function that return the count of negative number in an array?

const countNegativeNumber = (array = []) => {
  const length = array.length;
  let count = 0;

  if (length === 0) {
    console.log("Array is empty!");
    return;
  }

  for (let i = 0; i < length; i++) {
    const value = array[i];

    if (value < 0) {
      count++;
    }
  }

  console.log(count, " Negative count is in array");
};

countNegativeNumber([-1, 3, 4, 5, 6, 0, -4, -5, -7, -3, -6, 8, 9, 4]);
