//Write a function that uses a ternary operator to check if an argument exists or not

function ternary(arg) {
 return arg ? true : false;
};

console.log(ternary()); //return false
console.log(ternary('hello')); //return true

/////////////////////////////////////////////////////////////////////////


//Write a function that uses shortcircuiting to check if an argument exists or not

function shortCircuit(arg){
  return !!arg && true
};

console.log(shortCircuit());
console.log(shortCircuit('hello'));


/////////////////////////////////////////////////////////////////////////


//Write a function that will take a string of space separated numbers, and
//will return the highest and lowest number (in that order).
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"

function highAndLow(numbers){
  let arr = numbers.split(' ').sort((a, b) => a - b);
  return arr[arr.length -1] + ' ' + arr[0];
};

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));

// OR
function highAndLow(numbers){
  let numberArray = numbers.split(' ');
  return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`
}

/////////////////////////////////////////////////////////////////////////


//Write a function that will square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
  return Number(('' + num).split('').map(val => val * val).join(''));
};

console.log(squareDigits(9119));

/////////////////////////////////////////////////////////////////////////


//Write a function that takes a list of non-negative integers and strings and 
//returns a new list with the strings filtered out.

function filteredList(list) {
  return list.filter(i => typeof i === 'number')
};

const testList = [1,2,'a','b', 23, 'hello'];

console.log(filteredList(testList));

/////////////////////////////////////////////////////////////////////////


//Write a function, where given an array, will duplicate that array

function duplicateArray(arr) {
    return arr.concat(arr);
  }
  
  console.log(duplicateArray([1, 3, 4, 5]));
  
/////////////////////////////////////////////////////////////////////////
  
  //Write a function that would allow you to do this:
  
  let addSix = createBase(6);
  console.log(addSix(10)); //returns 16
  console.log(addSix(21)); //retruns 27
  
  //Answer:
  
  function createBase(baseNumber) {
    return function(n) {
      return baseNumber + n;
    }
  }
  
  /////////////////////////////////////////////////////////////////////////


//Write a function that would allow you to do this:
multiply(5)(6);

//Answer

function multiply(a) {
  return function(b) {
    return a * b;
  }
};

console.log(multiply(5)(6));

/////////////////////////

//Write a function that finds the length of the longest word in a given string

function findLongestWord(str) {
  let strSplit = str.split(' ');
  let longestWord = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// //OR

function findLongestWord2(str) {
  var longestWord = str.split(' ').sort((a, b) => b.length - a.length);
  return longestWord[0].length;
}

console.log(findLongestWord2("The quick brown fox jumped over the lazy dog"));

// //OR REDUCE

function findLongestWord3(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
findLongestWord3("The quick brown fox jumped over the lazy dog");

/////////////////////////

// Given a string, return true if the string is a palindrome or false if it is not.  
// Palindromes are strings that form the same word if it is reversed. 
//  --- Examples:
//   palindrome("madam") === true
//   palindrome("abcdefg") === false
//   palindrome("racecar") === true


//method one

const isPalindrome = testString => {
  //take the string and break into an array
  //reverse that array
  //put it back together as a string
  //check if that value equlas the original string
  return testString.toLowerCase().split('').reverse().join('') === testString.toLowerCase();
}
console.log(isPalindrome('racecar'));


//method two
const isPalindrome2 = testString => {
  const lettersArray = testString.split('');
  const reversedArray = [];

  for(let i = lettersArray.length-1; i >= 0; i--){
      reversedArray.push(lettersArray[i]);
  }
  return reversedArray.join('') === testString;
}

console.log(isPalindrome2('abcd'));

/////////////////////////

//FIZZ BUZZ! Create a for loop that iterates up to 100, while outputting 'fizz' at multiples of 3,
// 'buzz' at multiples of 5, and 'fizzbuzz' at multiples of 3 and 5.

  for (let i = 0; i <= 100; i++) {
    let f = i % 3 === 0,
    b = i % 5 === 0;
    console.log(f ? (b ? 'Fizzbuzz' : 'Fizz') : b ? 'Buzz' : i)
  };


// Write a function that takes in an array of integers and returns an object with keys minimum, maximum, average with correct values.
const returnValues = (arr) => {
  let object = {
      max: arr[0],
      min: arr[0],
      avg: 0
  }

  arr.forEach(item => {
      if (item > object.max) {
          object.max = item
      }
      if (item < object.min) {
          object.min = item
      }
      object.avg += item
  })
  object.avg = object.avg / arr.length
  return object
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr)
console.log(returnValues(arr))


// can also use a reduce function 
const reduceValues = (arr) => {
let object = arr.reduce((obj, item) => {
  if (item > obj.max) {
    obj.max = item
  }
  if (item < obj.min) {
    obj.min = item
  }
  obj.avg += item;
  return obj;
}, {max: arr[0], min: arr[0], avg: 0})
object.avg = object.avg / arr.length
return object;
}
let newArr = [1, 6, 4, 8, 2, 9, 0, 12]
console.log(newArr)
console.log(reduceValues(newArr))


//Write a function that removes all duplicates from an array of strings.

const fruitArray = ['banana', 'apple', 'orange', 'lemon', 'apple', 'lemon'];

//method one

function removeDuplicates(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
};
console.log(removeDuplicates(fruitArray));

//Basically, we iterate over the array and, for each element, 
//check if the first position of this element in the array is equal to 
//the current position. Obviously, these two positions are different for duplicate elements.


//method two

function removeDuplicates2(array) {
    return [...new Set(array)];
};
console.log(removeDuplicates2(fruitArray));


//method three

function removeDuplicates3(array) {
    let unique = [];
    array.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    });
    return unique;
}
console.log(removeDuplicates3(fruitArray));

//////////////////////////////////////////////////////////////