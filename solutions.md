



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
