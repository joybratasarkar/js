// function convert(s, numRows) {
//     if (numRows === 1) return s; // special case

//     const rows = new Array(numRows).fill(''); // create an array to store rows

//     let row = 0;
//     let direction = 1; // 1: going down, -1: going up

//     for (let i = 0; i < s.length; i++) {
//       rows[row] += s[i]; // add the current character to the row

//       if (row === 0) {
//         direction = 1; // switch to going down when reaching the first row
//       } else if (row === numRows - 1) {
//         direction = -1; // switch to going up when reaching the last row
//       }

//       row += direction; // move to the next row based on the direction
//     }

//     return rows.join(''); // join all rows together as a string
//   }




// var convert = function convert(s, numRows) {
//     if (numRows === 1) return s; // special case

//     const rows = new Array(numRows).fill('')
//     console.log('Array',rows);
//     let i = 0;
//     let row = 0;
//     let step = 1;

//     for (let j = 0; j < numRows; j++) rows[j] = '';

//     while (i < s.length) {
//       rows[row] += s[i];
//       // console.log('rows[row]',rows[row]);
//       if (row === 0) {
//         step = 1;
//       } else if (row === numRows - 1) {
//         step = -1;
//       }

//       row += step;
//       i++;
//     }

//     return rows.join('');
//   }



// function convert(s, numRows) {
//     if (numRows === 1 || s.length < numRows) {
//       return s;
//     }
//     let rows = [];
//     let currentRow = 0;
//     let reverse = false;
//     let result = "";

//     for (let i = 0; i < numRows; i++) {
//       rows[i] = [];
//       // console.log('rows[i]',rows[i]);
//     }

//     for (let i = 0; i < s.length; i++) {
//       rows[currentRow].push(s[i]);
//       // console.log(rows[currentRow])

//       if (reverse === false) {
//         currentRow++;
//       } else {
//         currentRow--;
//       }

//       if (currentRow === numRows - 1 || currentRow === 0) {
//         reverse = !reverse;
//       }
//     }

//     rows.forEach((row) => {
//       result += row.join("");
//     });

//     return result;
//   }




// function convert(string, rowNum) {
//   row = 0;
//   if (rowNum < 2) return string
//   var rows = new Array(rowNum).fill('');
//   var direction = 0;
//   for (let index = 0; index < string.length; index++) {
// // console.log('string[index]',string[index]);
//     rows[direction] += string[index]
//     console.log('rows', direction,'---',string[index]);

//     if (direction == rowNum - 1) {
//       // console.log('inside');
//       direction = 0
//     }
//     else {
//       // console.log('inside-else');
//       direction += 1
//     }

//     // row += 1

//   }
//   console.log('rows',rows);
//   return rows.join('');

// }























function convert(string, rowNum) {
  row = 0;
  if (rowNum < 2) return string
  var rows = new Array(rowNum).fill('');
  var direction = 0;
  let downward = true
  for (let index = 0; index < string.length; index++) {
    // console.log('string[index]',string[index]);
    rows[direction] += string[index]
    console.log('rows', direction);
    if (downward) {
      if (direction == rowNum - 1) {
        downward = false;
      }
      else {
        direction += 1
      }

    }else{
      if(direction == 0){
        downward = true;
      }else{
        direction -= 1;
      }
    }
  }
  console.log('rows', rows);
  return rows.join('');

}




var data = convert('PAYPALISHIRING', 4)
console.log('string', data)
