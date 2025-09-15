const smallestElementArray = (array = []) => {
  const length = array.length;
  if (length === 0) {
    console.log("array is empty");
  }

  let smallestElement = Infinity;

  for (let i = 0; i < length; i++) {
    const value = array[i];

    if (value < smallestElement) {
      smallestElement = value;
    }
  }

  console.log(smallestElement, "smallest element");
};

smallestElementArray([3, 6, 7, 4, 3, 0, 6, -3, -7, -4, -1]);
