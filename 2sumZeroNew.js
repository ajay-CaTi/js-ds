// checking sum zero problem 1
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> input
// [?, ?]

// Beware this login work only on sorted array

function findSumPair(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    console.log("run");
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let numberIs = findSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(numberIs);

// onabort(n) linear complexity
