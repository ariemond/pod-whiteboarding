// Question One
// Write a function that takes an array of strings and returns an array of 
//numbers which represents the length of each string.

const exampleArrayOfStrings = ['bunny','beer','dancing','teal'];

const getStringLength = (arrayOfStrings) => arrayOfStrings.map(word => word.length);

console.log(getStringLength(exampleArrayOfStrings));


//Write a function, where given a string, reverse each word in the sentence
let myString = 'This is the Ewok Pod';

function reverseWords(string) {
  let firstOne = string.split('').reverse().join('');
  let secondOne = firstOne.split(' ').reverse().join(' ');
  return secondOne;
};

console.log(reverseWords(myString));


///////////////

//Write a function that checks if a number is an integer (not a decimal)

function isInt(num) {
  return num % 1 === 0;
};

console.log(isInt(2));
console.log(isInt(2.56));
console.log(isInt(0.45));

////////////////////////////////


//Given two strings, return true if they are anagrams of one another
//An anagram is a word or phrase formed by rearranging the letters of
//a different word or phrase, typically using all the original letters exactly once. 

let firstWord = 'Mary';
let secondWord = 'Army';


function isAnagram(first, second) {
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  a = a.split('').sort().join('');
  b = b.split('').sort().join('');

  return a === b
};

console.log(isAnagram(firstWord, secondWord));


/////////////////////////


//Write a function that can take any non-negative integer as an argument
//and return it with its digits in descending order.
//Essentially rearrange the digits to create the highest possible number.

//method one

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
};

console.log(descendingOrder(4357667));


//method two

function descendingNumbers(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
};

console.log(descendingNumbers(6572));

//method three

function downOrder(n){
  return parseInt(n.toString().split('').sort(function(a, b){
    return b - a;
  }).join(''));
};

console.log(downOrder(4938));

//method four

function descending(n){
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
};

console.log(descending(49357));

/////////////////////////////////////////////////////////////////////////


//Write a function that takes in an array OF arrays filled with positive integers, and return the SUM of the averages of those arrays. (eg. given [[1,2,2,1], [2,2,2,2]] should return 3.5)
let master = [[1, 1, 2, 2], [2, 2, 2, 2]]
//function to get average of an array
const avg = (arr) => {
  let average = arr.reduce(function(total, item) {
    return total + item
  }, 0)
  return average / arr.length
}
//add up all averages to give a sum
let sum = 0;
master.forEach(item => {
  sum += avg(item);
})
//rather than use forEach above, can use reduce 
  //let sum = master.reduce(function(acc, item) {
  //  return acc += avg(item)
  //}, 0)
  
//full solution using nested reducers
let sum2 = master.reduce(function(acc, arr) {
  let average = arr.reduce(function(total, item) {
    return total + item
  }, 0)
  return acc += average / arr.length
}, 0)

console.log(sum2);