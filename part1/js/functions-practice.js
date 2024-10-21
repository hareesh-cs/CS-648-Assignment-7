//STEP 1
function halfNumber() {
    "use strict";
    let number = parseFloat(prompt("STEP 1. Half of a number. \nEnter a number:"));
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }
    let result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
}
halfNumber();

//STEP 2
function squareNumber() {
    "use strict";
    let number = parseFloat(prompt("STEP 2. Squaring a number. \nEnter a number:"));
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }
    let result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
}
squareNumber();

//STEP 3
function percentOf() {
    "use strict";
    let firstNumber = parseFloat(prompt("STEP 3. Percent of a number. \nEnter the first number:"));
    let secondNumber = parseFloat(prompt("Enter the second number:"));
    if (isNaN(firstNumber) || isNaN(secondNumber) || secondNumber === 0) {
        alert("Please enter valid numbers, and the second number should not be zero.");
        return;
    }
    let result = (firstNumber / secondNumber) * 100;
    console.log(`${firstNumber} is ${result.toFixed(2)}% of ${secondNumber}.`);
}
percentOf();

//STEP 4
function findModulus() {
    "use strict";
    let firstNumber = parseFloat(prompt("STEP 4. Modulus of two numbers. \nEnter the first number:"));
    let secondNumber = parseFloat(prompt("Enter the second number:"));
    if (isNaN(firstNumber) || isNaN(secondNumber) || secondNumber === 0) {
        alert("Please enter valid numbers, and the second number should not be zero.");
        return;
    }
    let result = firstNumber % secondNumber;
    console.log(`${result} is the modulus of ${firstNumber} and ${secondNumber}.`);
}
findModulus();

//STEP 5
function calculateSum() {
    "use strict";
    let input = prompt("Enter numbers separated by commas:");
    if (!input) {
        alert("Please enter some numbers.");
        return;
    }
    let numbers = input.split(",").map(Number);
    if (numbers.some(isNaN)) {
        alert("Please ensure all inputs are valid numbers.");
        return;
    }
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`The sum of numbers ${numbers.join(", ")} is ${sum}.`);
}
calculateSum();
