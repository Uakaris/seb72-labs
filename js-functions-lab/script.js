console.log('Is this thing on?');

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult (age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2 Result:', isAdult(9));
console.log('Exercise 2 Result:', isAdult(55));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("f"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
    return name + '@' + domain;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
console.log('Exercise 4 Result:', generateEmail("darthvadar_89", "darkside.com"));

// I initally added the @ symbol in the console log and not in the function.
// I tried to add it to the function but could not work out how.
// The '@' symbol seems to be used for different things that I am not yet aware of.
// This morning I realised I could add it to the return in quotation marks.

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, timeOfDay) {
    if (timeOfDay === 'morning') {
        greeting = 'Top of the morning to you';
    } else if (timeOfDay === 'afternoon') {
        greeting = 'good afternoon';
    } else if (timeOfDay === 'evening') {
        greeting = 'Good evening';
}
return greeting + ', ' + name + '!';
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// This works, but I am not sure if it is correct practice to write 'if', 'else if', 'else if'.
// Can you just keep going with else 'if', 'else if'?
// Or does the last statement need to be an 'else'?
// My understanding so far is that 'else' would be returned if the console log was something not mentioned in the 'if' and 'else if'.

/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

function reverseString(backwards) {
    return backwards.split('').reverse().join('');
}

console.log('Exercise 6 Result:', reverseString("rockstar"));
console.log('Exercise 6 Result:', reverseString("Hannah"));

// This one was hard and I would say that I am not conifdent in explaining how I achieved it...
// Had to google how to do it.
// 'Split', 'reverese', and 'join' were all new concepts to me.
// 'Split' breaks the phrase into individual characters.
// 'Reverse' reverses the characters.
// 'Join' joins the individual characters back together (again).

/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

function checkPalindrome(str) {
    let Str = str.toLowerCase();
    let reversedStr = '';
    for (let i = Str.length - 1; i >= 0; i--) {
        reversedStr += Str[i];
    }
    if (Str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

// I found exercise 7 quite tricky. This works but I need to spend more time understanding how it all works.
// making a change

console.log('Exercise 7 Result:', checkPalindrome("radar"));

/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1, num2, num3) {
    let maxNum = num1;
        if (num2 > maxNum) {
            maxNum = num2;
        }
        if (num3 > maxNum) {
            maxNum = num3;
        }
        return maxNum;
}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));

// Exercise 8 was hard to start but made sense once I started. 
// Still need to work on my understanding of the basic principls for solving/starting to solve problems.

/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(billAmount, tipPercentage) {
    let tipAmount = (billAmount * tipPercentage) / 100;
    return tipAmount;
}

console.log('Exercise 9 Result:', calculateTip(50, 20));

// I knew where to start with one but should probably brush up on my maths skills 
//because figuring out the actual equation took longer than it should have.

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        return (temperature * 9/5 ) + 32;
    } else { (scale === 'F') 
        return (temperature - 32) * 5/9;
    }
}

console.log('Exercise 10 Result:', convertTemperature(32, "C"));

// Had to look up the conversion for celcius to fahrenheit etc. Assume this is fine.