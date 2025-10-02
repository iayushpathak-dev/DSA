function palindrome(data) {
  const modifyData = data.toString();
  const length = modifyData.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (modifyData[i] !== modifyData[length - (i + 1)]) {
      return "Not a palindrome";
    }
  }

  return "is palindrome";
}

const data = palindrome(121);

console.log(data);
