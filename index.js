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

/** HINT:
 * You know your solution should return 1 when the number passed to the function is 0 or 1.  Also, the final value returned will be the product of all the numbers between 1 and the number (inclusive).  If you initialize the value for the product to 1, then think how you could start at the given number and continue decrementing this number until a specific value while multiplying the product by the number at each step.
 *
 * RECURSIVE SOLUTION:
 * This one starts easily since 0! = 1, so you can go ahead and simply return 1 there.
 * We can use that as an "if" in order to break the loop we're going to create using a "recursive function".  It will check if the number you gave the function is 0 (which would be the end of your factorial chain).  Functions "end" when they return anything.  In fact, "all" functions without an explicit return statement will return undefined.
 * This is also why "instead" of having "finished", a function is always said to "have returned".  And now this...
 *
 * UNDERSTANDING RECURSION:
 * Recursion refers to a function repeating (calling) itself.  In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is num - 1 (which initially translates to 4).  The very function is going to "run inside itself" interesting, eh?
 *
 * UNDERSTANDING THE FLOW:
 * The first "returned" value can be visualized better if you think about those parenthesis operations you did in secondary school where you do the math inside every parenthesis from inside out, bracket and square bracket until you get a final result (a total).  This time it's the same thing, look at the program flow:
 *
 * DURING THE FIRST EXECUTION OF THE FUNCTION:
 *    [num = 5]
 * Is 5 equal to 1 or 0?  NO => Oki doki, let's continue...
 *    RETURNS:
 * (5 _(second execution: 4 _(third execution: 3 _(fourth execution: 2 _fifthe execution: 1))))
 * What it returns can be viewed as (5 * (4 * (3 * (2 * 1)))) or just 5 * 4 * 3 * 2 * 1, and the function will return the result of that operation: 120.  Now, let's check what the result of the executions do:
 *
 * DURING THE REST OF THE EXECUTIONS:
 *    Second Execution: num = 5 - 1 = 4 -> is num 0 or 1? NO
 * -> return the multiplication between 4 and the next result when num is now 4 - 1.
 *    Third Execution: num = 4 - 1 = 3 -> is num 0 or 1? NO
 * -> return the multiplication between 3 and the next result when num is now 3 - 1.
 *    Fourth Execution: num = 3 - 1 = 2 -> is num 0 of 1? NO
 * -> return the multiplication between 2 and the next result when num is now 2 - 1.
 *    Fifth Execution: num = 2 - 1 = 1 -> is num 0 or 1? YEP
 * -> return 1.  And this is where the recursion stops because there are no more executions.
 *
 * RELEVANT LINKS:
 * JS Functions (https://www.youtube.com/watch?v=R8SjM4DKK80)
 * Recursion in JS (https://www.youtube.com/watch?v=k7-N8R0-KY4)
 */

/** SOLUTION 1 EXPLAINED (AS ABOVE):
 * Since the return values for the function will always be greater than or equal to 1, "product" is initialized at one.  For the case where the number is "0", the for loop condition will be false, but since "product" is initialized as "1", it will have the correct value when the "return" statement is executed.
 * For all numbers passed to the function which are greater than one, the simple "for" loop will increment "i" by one each iteration and recalculate "product" up to the value "num".
 */

/** SOLUTION 2: */
function factorialize1(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize1(num - 1);
}
console.log('5! => ', factorialize1(5));
console.log('10! => ', factorialize1(10));
console.log('20! => ', factorialize1(20));
console.log('0! => ', factorialize1(0));
/** EXPLAINED:
 * Notice at the first line we have the terminal condition, i.e. a condition to check the end of the recursion.  If "num == 0", then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels.  If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a Stack Overflow (https://en.wikipedia.org/wiki/Stack_overflow).
 * RELEVANT LINKS:
 * Recusion (https://www.codecademy.com/en/courses/javascript-lesson-205/0/1)
 * Factorialization (https://en.wikipedia.org/wiki/Factorial)
 * Arithmetic Operators (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
 */

/** SOLUTION 3: */
function factorialize2(num, fact = 1) {
  if (num === 0) {
    return fact;
  } else {
    return factorialize2(num - 1, fact * num);
  }
}
console.log('5! => ', factorialize2(5));
console.log('10! => ', factorialize2(10));
console.log('20! => ', factorialize2(20));
console.log('0! => ', factorialize2(0));
/** EXPLAINED:
 * In this solution, we use Tail Recusion (https://stackoverflow.com/questions/33923/what-is-tail-recursion) to optimize the memor use.
 * In traditional head recusion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result.  In this manner, you don't get the result of your calculation until you have returned from every recursive call.
 * In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step.  This results in the last statement being in the form of (return (recursive-function params)).
 * In this solution, with aech evaluation of the recursive call, the factorial is updated.  This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.
 * RELEVANT LINKS:
 * Tail Recursion (https://www.geeksforgeeks.org/tail-recursion/)
 */

/** SOLUTION 4: */
function factorialize3(num) {
  return num < 0
    ? 1
    : new Array(num)
        .fill(undefined)
        .reduce((product, _, index) => product * (index + 1), 1);
}
console.log('5! => ', factorialize3(5));
console.log('10! => ', factorialize3(10));
console.log('20! => ', factorialize3(20));
console.log('0! => ', factorialize3(0));
/** EXPLAINED:
 * In this solution, we used "reduce" function to find the factorial value of the number.
 * We have created an array which has length "num".  And we filled all elements of the array as undefined.  In this case, we have to do this because empty arrays couldn't be reducible.  You can fill the array as you wish by the way.  This depends on your engineering sight completely.
 * In "reduce" function's accumulator is calling "product" this is also our final value.  We are multiplying our index value with the product to find "factorial" value.
 * We're setting product's initial value to 1 because if it was zero products gets zero always.
 * Also the factorial value can't calculate for negative numbers, first of all, we're testing this.
 */
