//      *
//     **
//    ***
//   ****
//  *****

function sixthQuestion(n) {
  for (let i = n - 1; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }

    console.log(row);
  }
}

sixthQuestion(5);
