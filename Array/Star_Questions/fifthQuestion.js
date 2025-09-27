// 12345
// 1234
// 123
// 12
// 1

function fifthQuestion(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j <= i - 1; j++) {
      row = row + `${j + 1}`;
    }
    console.log(row)
  }
}

fifthQuestion(5);
