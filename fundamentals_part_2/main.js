///////////////////
// Arrow functions

const calcAge = birthYear => {
  return 2020 - birthYear;
}

console.log(calcAge(1995));

// with multiple parameters
// wrap parameters with ()

const retire = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  const untilRetire = 65 - age;

  return `${firstName} will retire in ${untilRetire} years.`;
}

console.log(retire(1995,'Dallas'));


/////////////////////
// Functions calling functions

function cutFruit(fruit) {
  return fruit * 4;
}

function processFruit(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);

  return `Juice made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(processFruit(2,3));

/////////////////////////////
// Working with Arrays

const arr = ['Dallas','Tommy','John'];

// length of array
console.log(arr.length);

// index array
console.log(arr[1]);

// change element in array at index
arr[2] = 'Bobby';
console.log(arr);

// using variables
const name = "Kevin";
const arr1 = [name, 'Dallas','Jones'];
console.log(arr1);

////////////////////////
// Array methods

const arr2 = ['Dallas','Tommy','John'];

// add items to back of array
arr2.push('Hannah');
console.log(arr2);

// add items to front of array
arr2.unshift('Tim');
console.log(arr2);

// remove last element from array
const person = arr2.pop();
console.log(person);
console.log(arr2);

// remove first element from array
const person1 = arr2.shift();
console.log(person1);
console.log(arr2);

// get index of element
console.log(arr2.indexOf('Tommy'));

// ES6 check if element in array
// includes does not use type coercion
console.log(arr2.includes('John'));

/////////////////////////////
// Objects in JavaScript. JSON

const obj = {
  name: 'Dallas',
  age: 25,
  height: '5\'11',
  friends: ['John','Richie','Stu']
}

console.log(obj.height);

obj.friends.forEach(i => console.log(i));