///// find most frequent value in array
const test = ['a','b','c','d','d','c','d','e','f','a'];

const mostFreq = arr => {
  const obj = {};
  arr.forEach(val => {
    if (val in obj) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
  });

  let maxChar = '';
  let max = 0;
  for (const key in obj) {
    if (obj[key] > max) {
      maxChar = key;
      max = obj[key];
    } 
  }
  return maxChar;
};

console.log(mostFreq(test));

//// reverse integer
const revInt = num => {
  let str = num.toString().split('');
  let neg = '';

  if(str[0] === '-') {
    neg = str.shift();
  }

  let revStr = '';

  str.forEach(ch => {
    revStr = ch + revStr;
  })

  if (neg) {
    revStr = neg + revStr;
  }
  
  return Number(revStr);
};
console.log(revInt(-1140));

//// anagrams
// sorting method
const anagram = (str1,str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let a = str1.toLowerCase().split('').sort().join('');
  let b = str2.toLowerCase().split('').sort().join('');

  return a === b;
}

console.log(anagram('heeeelo','oleehee'));

// let str1 = 'adkfc';
// for (let i of str1) {
//   console.log(i);
// }

// capitalize words in sentence
const capitalize = str => {
  const words = [];

  for(let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
};

console.log(capitalize('a lazy fox'));