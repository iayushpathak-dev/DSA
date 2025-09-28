// 1
// 01
// 010
// 1010
// 10101

function eighthQuestion(n) {
  let defaultNumber = "1";

  for (i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      if (i !== 0) {
        defaultNumber = defaultNumber === "1" ? "0" : "1";
      }

      row = row + defaultNumber;
    }

    console.log(row);
  }
}

eighthQuestion(6);
