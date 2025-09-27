// 1
// 22
// 333
// 4444
// 55555

function thirdQUestion(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row =  row + `${i + 1}`
    }

    console.log(row);
  }
}

thirdQUestion(5);
