// String Anagarm
// 'hello'-> 'llleo' No Anagram
// 'hello'-> 'llheo'  Anagram

// ANagarm :- No. of letters same but arrangement different

// first check both string length of two string is 0, if NOT then we cannot find/CHECK Anagarm

// String 'hello'
// {h:0, e:0, l:0, o:0}

function isAnagarm(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let counter = {};
  for (let letter of s1) {
    // console.log(letter);
    // counter[letter] = counter[letter];
    // counter[letter] = counter[letter] || 0;
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }
  console.log(counter);
  for (let items of s2) {
    console.log(counter[items]);
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

const check = isAnagarm("hello", "llheo");
console.log(check);

// o(n) liner time complexity
