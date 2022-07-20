// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Factorialize a Number</h1>`;

/** TODO:
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!.
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120.
 * Only integers greater than or equal to 0 will be supplied to the function.
 
 function factorialize(num) {
   return num;
 }
 
 factorialize(5);
 */

function factorialize(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
    //    console.log(i, fact);
  }
  return fact;
}

console.log('5! => ', factorialize(5));
console.log('10! => ', factorialize(10));
console.log('20! => ', factorialize(20));
console.log('0! => ', factorialize(0));
