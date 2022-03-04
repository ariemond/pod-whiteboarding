//Write a for loop that counts from zero to 5
for (let i = 0; i < 6; i++) {
    console.log(i);
};

//Write a for loop that counts from 5 to 0
for (let i = 5; i >= 0; i--) {
    console.log(i);
};

//Write a for loop that counts by twos up to 20
for (let i = 0; i <= 20; i += 2){
    console.log(i);
};

//The addition assignment operator ( += ) 
//adds the value of the right operand to a 
//variable and assigns the result to the variable. 
//The types of the two operands determine the behavior of 
//the addition assignment operator. Addition or concatenation is possible.


//Using a for loop, add all the numbers in an array

const anArray = [1, 2, 3];

// function addNumbers(array) {
    //     for (let i = 0; i < array.length; i++) {
        //         counter += array[i];
        //     }
        //     return counter;
        // };
        // console.log(addNumbers(anArray));
        
let counter = 0; 

for (let i = 0; i < anArray.length; i++) {
    counter += anArray[i];
}
console.log(counter);

//Using a for loop, loop through an array of numbers and print the sum of all the positive numbers
//You can assume the array contains only numbers

function sumPositive(array) {
    let sumVariable = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sumVariable = sumVariable + (array[i])
        }    
    }
    return sumVariable;
};

console.log(sumPositive([1, 3, -2, 7]));


//Write a switch statement that converts a number from 1-7 to the name of a weekday

function dayOfTheWeek(num) {
    switch (num) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
    }
  };

  console.log(dayOfTheWeek(5));


  //Write a function that checks if a number is even or odd

  function isEven(num) {
      if (num % 2 === 0) {
          return true
      } else {
          return false
      };
  };

  console.log(isEven(4));

  //Write a while loop that removes the first item in an array with each loop

  const whileArray = ['a', 'b', 'c'];

  while (whileArray.length > 0) {
      const elem = whileArray.shift();
      console.log(elem);
  };


  //Write a function that sums all the numbers between a given min and max using a for loop

  let min = 1;
  let max = 100;

  function sumUp() {
      let sum = 0;
      for (let i = min; i < max; i++) {
          sum += i;
      }
      console.log(sum);
  };

  sumUp();



  // Control Flow exercises:
// first go over how this works, what happens given the following circumstances?
// 1.
let dev = '';
let knowsJavaScript = true;
// 2. 
// let dev = 'MandoHort Student'; 
// let knowsJavaScript = true;
// // // 3.
// let dev = true;
// let knowsJavaScript = true;
// // // 4.
// let dev = [];
// let knowsJavaScript = 0;
// // // 4.
// let dev = !true;
// let knowsJavaScript = 0;

if (knowsJavaScript && dev) {
  console.log(`Great, ${dev}! Get ready to practice your JavaScript!`)
} else if (knowsJavaScript) {
  console.log("Great! Get ready to practice your JavaScript!")
} else if (dev) {
  console.log('Great, ' + dev + '! Get ready to learn something new!')
}  else {
  console.log('Great! Get ready to learn something new!')
}


// How does this function work and what will the outputs be given this aray?
let birthYear = [1953, 1967, 2002, 1985, 2017];

for(let i = 0; i < birthYear.length; i++) {
  let age = 2021 - birthYear[i]
  console.log(age);
  if (age > 17) {
    console.log("You're an adult")
  } else {
    console.log("You're still growing")
  }
}

/// == (get students to find the 2 errors) ==
// - first conditional: mo > months.length
// - for loop exit condition: months.length
// - return the month with the number given, at index in one previous place (ie month - 1)


// What does this program do?
// Given the input of 1, what does the program return?
// Given the input of 12, what does the program return?
// Given the input of 22, what does the program return?

function getMonthName(mo) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (mo < months.length) {
      return 'that is not a valid month'
    }
    for (let i = 0; i < mo.length; i++) {
      if (i === mo) {
        return months[mo];
      }
    }
  }

//   Working Solution:
  function getMonthName(mo) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (mo > months.length || mo === 0) {
      return 'that is not a valid month'
    }
    for (let i = 0; i <= months.length; i++) {
      if (i === mo) {
        return months[mo - 1];
      }
    }
  }

  console.log(getMonthName(1));


// Write a for loop that goes through the numbers 1-12 and depending on the following, prints something to the console. 
// For numbers 1 through 6, print '...loading' to the console
// For numbers 7 through 10, print '...almost there!' to the console
// For number 11, print '...wait for it...' to the console
// For number 12, print 'DONE' to the console


// Solution:

for (let i = 1; i <= 12; i++) {
  if (i < 7) {
    console.log('...loading');
  }
  else if (i > 6 && i < 11) {
    console.log('...almost there!')
  }
  else if (i === 11) {
    console.log('...wait for it...')
  }
  else {
    console.log('DONE')
  }
}

