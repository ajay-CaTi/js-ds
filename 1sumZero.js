// checking sum zero problem 1
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> input
// [?, ?]

// 1. my solution

// function getSumPairZero(array) {
//   for (let num of array) {
//     // console.log( num);
//     for (j = 1; j < array.length; j++) {
//      // console.log(array[j]);
//       let res = num + array[j];
//       console.log(res);
//       if (res === 0) {
//         return [num, array[j]];
//       }
//     }
//   }
// }

// let numberIs = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(numberIs);

// 1. SIR solution
function getSumPairZero(array) {
  for (let num of array) {
    // console.log( num);
    for (j = 1; j < array.length; j++) {
      if (num + array[j] === 0) {
        return [num, array[j]];
      }
    }
  }
}

let numberIs = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(numberIs);

// o(n.pow(2)) quadratic time complexity

// Logic change More optimize
