const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  
  //  Map - return a new array of inventors with their first and last names only
  
  // 	Output: array that includes each object stated above in the format of:
  // 				[0]: John Smith
  // 				[...]: … ….
      
   const names = inventors.map ((person) => {
          return person.first + ' ' + person.last
  });
  
  console.log(names);
  
  let name2 = inventors.map(person => `${person.first} ${person.last}`);
  console.log(name2);


//create a new array with sentences that follow this format: 'firstName lastName was born in yearBorn and passed in yearPassed'
// const names = inventors.map ((person) => {
//     return person.first + ' ' + person.last
// });

// console.log(names);

let name3 = inventors.map(person => `${person.first} ${person.last} was born in ${person.year} and passed in ${person.passed}`);
console.log(name3);

 
//  filter - return a new array of inventors if their first name starts with the letter A
 
//  EXPECTED OUTPUT
//  const startsWithA = [
//  { first: ‘Albert’, last: ‘Einstein’, year: 1879, passed: 1955 },
//  {first: ‘Ada’, last: ‘Lovelace’, year: 1815, passed: 1852}]
 
//  ATTEMPT
//  const startsWithA = inventors.filter(function(inventor) {
//     if(inventor.first.charAt(0) === "A"){
//     return inventor}
// })

// console.log(startsWithA);
 

//  UPDATED
 const startsWithA2 = inventors.filter(inventor => inventor.first[0] === "A");
 console.log(startsWithA2);
 



// Filter - return a new array of inventors if the year they passed is between 1900 and 1999

const result = inventors.filter(inventor => { 
	return inventor.passed >= 1900 && inventor.passed <= 1999;
})

const result2 = inventors.filter(inventor => inventor.passed >=1900 && inventor.passed <= 1999)

console.log(result2);



// sort - sort inventors alphabetical by first name


const alphabeticalByFirstName = inventors.sort((aInventor, bInventor) => aInventor.first > bInventor.first ? 1 : -1);
console.table(alphabeticalByFirstName);

const alphabeticalByFirstName2 = inventors.sort(function(a, b){
    if (a.first[0] < b.first[0]){
        return -1
    } else if (a.first[0] > b.first[0]){
        return 1
    } else {
        return 0
    }
});
console.table(alphabeticalByFirstName2);


// Sort - sort inventors by year they were born
// const yearBorn = inventors.sort((a,b) => a.year > b.year ?  -1 : 1);
const yearBorn = inventors.sort((a, b) => a.year - b.year);
console.table(yearBorn);


//find Lise Meitner
const lise = inventors.find(inventor => inventor.first === "Lise");
console.log(lise);


//find any inventor
function findAny(firstName){
    inventors.find(inventor => inventor.first === firstName)
};
console.log(findAny('Hanna'));

//find her index
console.log(inventors);
const liseIndex = inventors.findIndex(inventor => inventor.first === 'Ada');
console.log(liseIndex);


//find the average age of all inventors
let inventorAverageAge = (inventors.reduce((totalYears,inventor) => totalYears + (inventor.passed - inventor.year),0)/inventors.length);
console.log(inventorAverageAge);

let year = inventors.find(inventor => inventor.year === 1815);
console.log(year);

let yearIndex = inventors.find(inventor => inventor.year === 1815);

// Reduce - return the total of years lived by all inventors

// Set variable for function called “sum”	
// Set variable for year passed called “passed”
// Set variable for year born called “year”

// Take “sum” and loop through array of object called “inventors”

// Use array method reduce on “inventors” which take an initial amount and new amount

let allYears = inventors.reduce((sum, inventor) => sum += inventor.passed - inventor.year, 0);
console.log(allYears);

// Output = sum total # of years for each person, calculated by passed - year.


//Write a function that removes all duplicates from an array of strings.
const fruitArray = ['banana', 'apple', 'orange', 'lemon', 'apple', 'lemon'];


//method one
function removeDuplicates(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
};
console.log(removeDuplicates(fruitArray));


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