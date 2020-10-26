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
movements.forEach(move => {
  if(move > 0) {
    console.log(`You deposited ${move}`);
  } else {
    console.log(`You withdrew ${Math.abs(move)}`);
  }
})