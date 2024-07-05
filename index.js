//sort numbers from lowest to highest
let arrayNumbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

arrayNumbers.sort((a,b) => a - b);

console.log(arrayNumbers);

//sort numbers from highest to lowest

arrayNumbers.sort((a,b) => b - a)

console.log(arrayNumbers);

//return an array of unique numbers
const arrayNumbers1 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const uniqueNumbers1 = [...new Set(arrayNumbers1)];

console.log(uniqueNumbers1)

//calculate the sum of the array
const sumNumbers2 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

let sum = 0;

for (let i = 0; i < sumNumbers2.length; i++) {
    sum += sumNumbers2[i];
}

console.log("Sum of all the numbers:", sum);

//return a new array with elements that are less than or equal to 100

const arrayNumbers3 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const filtNumbers = arrayNumbers3.filter(num => num <= 100);

console.log(filtNumbers);

//return a new array with elements that are greater than 50
const arrayNumbers4 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];
const filNumbers = arrayNumbers4.filter(num => num > 50);

console.log(filNumbers)


//return a new array with elements that are divisible by 2
const arrayNumbers5 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const diviNumByTwo = arrayNumbers5.filter(num => num % 2 === 0);

console.log(diviNumByTwo);

//return a new array with elements that are divisible by 3

const arrayNumbers6 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const diviNumByThree = arrayNumbers6.filter(num => num % 3 === 0);

console.log(diviNumByThree);

//return a new array with elements that are neither divisible by 2 or 3, if they exist
const arrayNumbers7 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const filtArray = arrayNumbers7.filter(num => num % 2 !== 0 && num % 3 !== 0);

console.log(filtArray);

//declare  a variable that counts how many elements are in an array

let arrayNumbers9 = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];
let numbersLen = arrayNumbers9.length;

console.log(numbersLen);

//declare a new array that contains the same elements as the original array, but reversed
const originalArray = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const revArray = originalArray.slice().reverse();

console.log(revArray);

//given an array

const aArray = [7,10, "Clentan", 13,89,true,45,false,"Jerry","Vukona", "Reabetswe", 600];

// return all values that are numbers 
const numbers = [];

for (let i = 0; i < aArray.length; i++) {
    if (typeof aArray[i] === 'number') {
        numbers.push(aArray[i]);
    }
}

console.log(numbers);

//while loop and variable
let i = 0;

while (i < aArray.length && typeof aArray[i] !== 'string') {
    i++;
} 

const foundString = i < aArray.length ? aArray[i] : null;

console.log(foundString);

//do while loop

let index = 0;
let sumAll = 0;

do {
    if (typeof aArray[i] === 'number') {
        sumAll += aArray[i];

    }
    i++;

} while (i < aArray.length);

console.log(sumAll);

// Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting that follows the basic English grammar standards. Eg “Hello, Sarah, Thabo, and Mariah.”.

names = ["Sarah", "Thabo", "Mariah"];
greeting = "Hello " + names.join(", ") + ".";

console.log(greeting);

// Using any looping structure of your choice and a new variable, remove all values in the array that are strings

let finalArray = ["Thabo", "John", 1 ,5,10];
let newArray = [];

for (let i = 0; i < finalArray.length; i++) {
    if (typeof filtArray[i] !== 'string') {
        newArray.push(filtArray[i]);
    }

}








