/* advanced_calculator.js */

// This code implements an advanced calculator with additional mathematical functions
// such as trigonometric, exponential, and factorial operations.

// Function to calculate the factorial of a number
function factorial(num) {
  if (num < 0) {
    throw new Error("Factorial operation not defined for negative numbers");
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Function to calculate the power of a number
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    return 1 / (base * power(base, -exponent - 1));
  }
  return base * power(base, exponent - 1);
}

// Function to calculate the square root of a number using Newton's method
function sqrt(number) {
  if (number < 0) {
    throw new Error("Square root operation not defined for negative numbers");
  }

  const epsilon = 0.0001;
  let guess = number / 2;

  while (Math.abs(guess * guess - number) >= epsilon) {
    guess = (guess + number / guess) / 2;
  }

  return guess;
}

// Function to calculate the sine of an angle in degrees
function sin(angle) {
  const radians = (angle * Math.PI) / 180;
  return Math.sin(radians);
}

// Function to calculate the cosine of an angle in degrees
function cos(angle) {
  const radians = (angle * Math.PI) / 180;
  return Math.cos(radians);
}

// Function to calculate the exponential of a number
function exp(number) {
  return Math.exp(number);
}

// Usage example
const result = power(2, 3) + sqrt(factorial(5)) - sin(60) * cos(45) + exp(2);
console.log(result);

// ... More advanced mathematical calculations...

// End of code