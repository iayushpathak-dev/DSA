// *
// **
// ***
// ****
// *****

function secondQuestion(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

secondQuestion(5);
