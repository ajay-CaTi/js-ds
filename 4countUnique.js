// Count unique numbers
//
// [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
// o/p -> 8

const unique = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]);
const res = Object.assign(...Array.from(unique, (val) => ({ [val]: "" })));
console.log(res); // {1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: ''}
