//Calculate the average of the numbers in an array of numbers
function calculateAverage(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      return 0; // Return 0 for an empty array to avoid division by zero
    }
  
    let sum = 0;
  
    // Loop through each element in the 'numbers' array and calculate the sum
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 
    }
  
    // Calculate the average by dividing the sum by the number of elements in the array
    const average = sum / numbers.length;
  
    return average; // Return the calculated average
  }
  
  // Example usage:
  const numbersArray = [99, 98, 95, 94, 96];
  const average = calculateAverage(numbersArray);
  console.log("Average:", average);

//Create a function that receives an array of numbers and returns an array containing only the positive numbers  

function getPositiveNumbers(numbers) {
    // Create an array to store the positive numbers
    let positiveNumbers = [];
  
    // Loop through each element in the 'numbers' array and filter the positive numbers
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= 0) {
        positiveNumbers.push(numbers[i]);
      }
    }
  
    return positiveNumbers;
  }
  
  // Example usage:
  const numbersArray = [-1, 1, -2, 2, -3];
  const positiveArray = getPositiveNumbers(numbersArray);
  console.log("Positive numbers:", positiveArray);
  
  //Find the maximum number in an array of numbers

  function findMaxNumber(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    // Initialize maxNumber to the first element of the array
    let maxNumber = numbers[0];
  
    // Loop through the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {
      // If the current element is greater than maxNumber, update maxNumber
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
  
    return maxNumber; // Return the maximum value found in the loop
  }
  
  // Example usage:
  const numbersArray = [10, 5, 25, 30, 15];
  const maxNumber = findMaxNumber(numbersArray);
  console.log("Maximum number:", maxNumber);
  
  //Print the first 10 Fibonacci numbers without recursion

  // Initialize the first two numbers of the Fibonacci sequence
let num1 = 0;
let num2 = 1;

// Array to store the Fibonacci numbers
let firstTenFibonacci = [];

// Loop to generate the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  firstTenFibonacci.push(num1);

  // Calculate the next Fibonacci number by adding the previous two numbers
  const nextNum = num1 + num2;

  // Update num1 and num2 for the next iteration
  num1 = num2;
  num2 = nextNum;
}

// Print the first 10 Fibonacci numbers
console.log("First 10 Fibonacci numbers are:", firstTenFibonacci);


//Create a function that will return a Boolean specifying if a number is prime

function isPrime(number) {
    if (number < 2) {
      return false; // Numbers less than 2 are not prime
    }
  
    // Check for divisibility from 2 up to the number (excluding the number itself)
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false; // If the number is divisible, it's not prime
      }
    }
  
    return true; // If no divisor is found, the number is prime
  }
  
  // Example usage:
  const numberToCheck = 17; // Replace 'numberToCheck' with the desired number to check for primality
  const isNumberPrime = isPrime(numberToCheck);
  console.log(`${numberToCheck} is prime: ${isNumberPrime}`);
  

  //Calculate the sum of digits of a positive integer number

  const number = 12345; // positive
// integer to calculate the sum of its digits

let sum = 0;
let num = number;

// Loop to extract each digit and add them up
while (num > 0) {
  const digit = num % 10;
  sum += digit;
  num = (num - digit) / 10;
}

console.log("Sum of digits:", sum);

//Print the first 100 prime numbers


let count = 0; // Counter for the number of prime numbers found
let k=1;
// Outer loop to find the first 100 prime numbers
for (let j = 2; count < 100; j++) {
  let isPrime = true; // if j is prime

  // Inner loop to check if j is divisible by any number from 2 to j - 1
  for (let i = 2; i < j; i++) {
    if (j % i === 0) {
      isPrime = false; // If j is divisible, it's not prime
      break;
    }
  }

  // If isPrime is still true, j is a prime number
  if (isPrime) {
    console.log(k++ +"-"+j); // Print the prime number
    count++; // Increment the count of prime numbers found
  }
}


//Rotate an array to the left 1 position


const myArray = [1, 2, 3, 4, 5];

if (myArray.length > 1) {
  const firstElement = myArray[0]; // Store the first element
  for (let i = 0; i < myArray.length - 1; i++) {
    myArray[i] = myArray[i + 1]; // Shift elements to the left
  }
  myArray[myArray.length - 1] = firstElement; // Place the stored first element at the end
}

console.log("Rotated Array:", myArray);
