## SOLUTIONS

### Solution 2:
```js
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
console.log('5! => ', factorialize(5));
console.log('10! => ', factorialize(10));
console.log('20! => ', factorialize(20));
console.log('0! => ', factorialize(0));
```
### Code Explanation:
Notice at the first line we have the terminal condition, i.e. a condition to check the end of the recursion.  If `num == 0`, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels.  If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a [Stack Overflow](https://en.wikipedia.org/wiki/Stack_overflow).

### REFERENCE LINKS:
- [Recusion](https://www.codecademy.com/en/courses/javascript-lesson-205/0/1)
- [Factorialization](https://en.wikipedia.org/wiki/Factorial)
- [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

### Solution 3: 
```js
function factorialize(num, fact = 1) {
  if (num === 0) {
    return fact;
  } else {
    return factorialize(num - 1, fact * num);
  }
}
console.log('5! => ', factorialize(5));
console.log('10! => ', factorialize(10));
console.log('20! => ', factorialize(20));
console.log('0! => ', factorialize(0));
```
### Code Explanation:
- In this solution, we use [Tail Recusion](https://stackoverflow.com/questions/33923/what-is-tail-recursion) to optimize the memor use.
- In traditional head recusion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result.  In this manner, you don't get the result of your calculation until you have returned from every recursive call.
- In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step.  This results in the last statement being in the form of (return (recursive-function params)).
- In this solution, with aech evaluation of the recursive call, the factorial is updated.  This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.

### REFERENCE LINKS:
- [Tail Recursion](https://www.geeksforgeeks.org/tail-recursion/)

### Solution 4:
```js
function factorialize(num) {
  return num < 0 ? 1 : new Array(num)
    .fill(undefined)
    .reduce((product, _, index) => product * (index + 1), 1);
}
console.log('5! => ', factorialize(5));
console.log('10! => ', factorialize(10));
console.log('20! => ', factorialize(20));
console.log('0! => ', factorialize(0));
```
### Code Explanation:
- In this solution, we used "reduce" function to find the factorial value of the number.
- We have created an array which has length `num`.  And we filled all elements of the array as `undefined`.  In this case, we have to do this because empty arrays couldn't be reducible.  You can fill the array as you wish by the way.  This depends on your engineering sight completely.
- In `reduce` function's accumulator is calling `product` this is also our final value.  We are multiplying our index value with the product to find `factorial` value.
- We're setting product's initial value to 1 because if it was zero products gets zero always.
- Also the factorial value can't calculate for negative numbers, first of all, we're testing this.
