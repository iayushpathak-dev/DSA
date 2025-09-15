// write a function that search for an element in an array, return the index if element is in present, if element is not present return -1?

function searchElementInArray(array = [], element) {
  const length = array.length;

  if (length === 0) {
    console.log("Array is empty!");
    return;
  }

  for (let i = 0; i < length; i++) {
    const value = array[i];
    if (value === element) {
      console.log("element found in an array,", i);
      return element;
    }
  }

  console.log("Element not present in an array, ", -1);
}

searchElementInArray([1, 4, 5, 3, 6, 2, 7, 8, 9, 4, 5, 7], 7);
