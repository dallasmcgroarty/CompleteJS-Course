// using arrays

// slice method
// returns a copy of the array
// does not change the original array
// inclusive on left index, exclusive on right index

let arr = ['a','b','c','d','e'];

console.log(arr.slice(2));
console.log(arr.slice());

// splice method
// deletes elements from array at given index range
// mutates the original array
// returns the spliced elements
// 

console.log(arr.splice(0,1));
console.log(arr);

// reverse method
// reverses an array
// mutates the original array

console.log(arr.reverse());

// concat method
// adds an array to another array
// does not mutate the original array

let arr2 = ['h','j','l','m'];
const letters = arr.concat(arr2);
console.log(letters);
// using spread operator
console.log([...arr,...arr2]);

// Join method
// joins array elements into a string seperated by a defined seperator
console.log(letters.join(', '));

//////////////////////////////////
// For loops and for each loops

const movements = [200, 400, -400, 3000, -650, -130, 70, 1300];

for (const move of movements) {
  if(move > 0) {
    console.log(`You deposited ${move}`);
  } else {
    console.log(`You withdrew ${Math.abs(move)}`);
  }
}
console.log('----------- forEach ------------')
movements.forEach((move, i, arr) => {
  if(move > 0) {
    console.log(`Move ${i+1}: You deposited ${move}`);
  } else {
    console.log(`Move ${i+1}: You withdrew ${Math.abs(move)}`);
  }
})

/////////////////////////////////////
// foreach with maps and sets
console.log('-------- maps/sets---------');
const currencies = new Map([
  ['USD','US Dollar'],
  ['EUR','Euro'],
  ['GBP','Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// set
const currencyUnique = new Set(['USD','GBP','USD','EUR','EUR']);
currencyUnique.forEach((value, _, map) => {
  console.log(`${value}`)
})

////////////////////////////////////////
// more array methods

const euroToUsd = 1.1;

// map method
// returns new array

const moveUsd = movements.map(value => {
  return value * euroToUsd;
});

console.log(movements);
console.log(moveUsd);

// filter method
// filters array based on function
// returns new array

const deposits = movements.filter(value => {
  return value > 0;
});

console.log(deposits);

// reduce method
// reduce values in array to one number
// uses a parameter acc (accumulator) to reduce the array

const balance = movements.reduce((acc, cur, i, arr) => {
  return acc + cur;
},0); // 0 is initial value of accumulator

console.log(balance);

// Chaining methods

const total = movements
  .filter(value => value > 0)
  .map(value => value * euroToUsd)
  .reduce((acc,value) => acc + value,0);

console.log(total);

// find method
// finds and returns element passed in
// returns the first element found that satisfies the condition

const firstNeg = movements.find(value => value < 0);
console.log(firstNeg);

// Sorting array

// ascending
movements.sort((a,b) => {
  if (a > b) {
    return 1;
  } 
  if (a < b) {
    return -1;
  }
});
console.log(movements);

// ascending cleaner
movements.sort((a,b) => a - b);

console.log(movements);

//descending
movements.sort((a,b) => {
  if (a > b) {
    return -1 
  }
  if (a < b) {
    return 1
  }
})

// descending cleaner
movements.sort((a,b) => b - a);

console.log(movements);