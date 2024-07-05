// Sort numbers from lowest to highest

function sortArray(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers;
}

let arrayNumbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

let sortedNumbers = sortArray(arrayNumbers);
console.log(sortedNumbers);

// Sort numbers from highest to lowest

function sortArrayDescending(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers;
}

let arrayNumbers1 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

let sortedDescendingNumbers = sortArrayDescending(arrayNumbers1);
console.log(sortedDescendingNumbers);

// Return an array of unique numbers

function findUniqueNumbers(numbers) {
    const uniqueNumbers = [...new Set(numbers)];
    return uniqueNumbers;
}

const arrayNumbers2 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const uniqueNumbers1 = findUniqueNumbers(arrayNumbers2);
console.log(uniqueNumbers1);

// Calculate the sum of the array

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const sumNumbers2 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

let totalSum = sumArray(sumNumbers2);
console.log("Sum of all the numbers:", totalSum);

// Return a new array with elements that are less than or equal to 100

function filterNumbersLessThanOrEqualTo100(numbers) {
    const filteredArray = numbers.filter(num => num <= 100);
    return filteredArray;
}

const arrayNumbers3 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const filtNumbers = filterNumbersLessThanOrEqualTo100(arrayNumbers3);
console.log(filtNumbers);

// Return a new array with elements that are greater than 50

function filterNumbersGreaterThan50(numbers) {
    const filteredArray = numbers.filter(num => num > 50);
    return filteredArray;
}

const arrayNumbers4 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const filNumbers = filterNumbersGreaterThan50(arrayNumbers4);
console.log(filNumbers);

// Return a new array with elements that are divisible by 2

function filterEvenNumbers(numbers) {
    const filteredArray = numbers.filter(num => num % 2 === 0);
    return filteredArray;
}

const arrayNumbers5 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const diviNumByTwo = filterEvenNumbers(arrayNumbers5);
console.log(diviNumByTwo);


// Return a new array with elements that are divisible by 3

function filterNumbersDivisibleByThree(numbers) {
    const filteredArray = numbers.filter(num => num % 3 === 0);
    return filteredArray;
}

const arrayNumbers6 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const diviNumByThree = filterNumbersDivisibleByThree(arrayNumbers6);
console.log(diviNumByThree);

// Return a new array with elements that are neither divisible by 2 or 3, if they exist

function filterNumbersNotDivisibleByTwoOrThree(numbers) {
    const filteredArray = numbers.filter(num => num % 2 !== 0 && num % 3 !== 0);
    return filteredArray;
}

const arrayNumbers7 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const filtArray = filterNumbersNotDivisibleByTwoOrThree(arrayNumbers7);
console.log(filtArray);

// Declare  a variable that counts how many elements are in an array

function getArrayLength(array) {
    return array.length;
}

let arrayNumbers9 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];
let numbersLen = getArrayLength(arrayNumbers9);

console.log(numbersLen);

// Declare a new array that contains the same elements as the original array, but reversed

function reverseArray(originalArray) {
    
    const reversedArray = originalArray.slice().reverse();
    return reversedArray;
}

const originalArray = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];
const revArray = reverseArray(originalArray);

console.log(revArray);

// Return values that are numbers

function filterNumbersFromArray(array) {
    const numbers = array.filter(item => typeof item === 'number');
    return numbers;
}

const aArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];
const numbers = filterNumbersFromArray(aArray);

console.log(numbers);

// Do while loop and variable

function findFirstString(array) {
    let i = 0;
    while (i < array.length && typeof array[i] !== 'string') {
        i++;
    }
    return i < array.length ? array[i] : null;
}

const bArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];
const foundString = findFirstString(bArray);

console.log(foundString);

// Do while loop

function sumNumbersFromArray(array) {
    let i = 0;
    let sumAll = 0;
    do {
        if (typeof array[i] === 'number') {
            sumAll += array[i];
        }
        i++;
    } while (i < array.length);
    return sumAll;
}

const cArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];
const sumAll = sumNumbersFromArray(cArray);

console.log(sumAll);

// Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting that follows the basic English grammar standards. Eg “Hello, Sarah, Thabo, and Mariah.”.

function generateGreeting(names) {
    const greeting = "Hello " + names.join(", ") + ".";
    return greeting;
}

const names = ["Sarah", "Thabo", "Mariah"];
const greeting = generateGreeting(names);

console.log(greeting);


// Using any looping structure of your choice and a new variable, remove all values in the array that are strings

function filterNonStrings(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'string') {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let finalArray = ["Thabo", "John", 1, 5, 10];
let newArray = filterNonStrings(finalArray);

console.log(newArray);


