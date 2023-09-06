// Count unique numbers
//  i  j
// [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
// o/p -> 8
// conditions
// i=0 j=0

// Yes
function countUnique(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}

let res = countUnique([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]);
console.log("Unique number is ", res);

// o(n) linear time complexity

// No below
// const unique = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]);
// const res = Object.assign(...Array.from(unique, (val) => ({ [val]: "" })));
// console.log(res); // {1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: ''}
