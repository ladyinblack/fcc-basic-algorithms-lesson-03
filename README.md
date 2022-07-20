# js-th9b9b

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-th9b9b)

### [Factorialize a Number](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number)


## HINTS
### Hint 1
You know your solution should return `1` when the number passed to the function is `0` or `1`.  Also, the final value returned will be the product of all the numbers between 1 and the number (inclusive).  If you initialize the value for the product to `1`, then think how you could start at the given number and continue decrementing this number until a specific value while multiplying the product by the number at each step.

#### RECURSIVE SOLUTION
This one starts easily since `0! = 1`, so you can go ahead and simply `return 1` there.

We can use that as an `if` in order to break the loop we're going to create using a **recursive function**.  It will check if the number you gave the function is 0 (which would be the end of your factorial chain).  Functions "end" when they return anything.  In fact, **all** functions without an explicit `return` statement will return `undefined`.

This is also why **instead** of having *finished*, a function is always said to *have returned*.  And now this...

#### UNDERSTANDING RECURSION:
Recursion refers to a function repeating (calling) itself.  In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is `num - 1` (which initially translates to 4).  The very function is going to **run inside itself** interesting, eh?

#### UNDERSTANDING THE FLOW:
The first **returned** value can be visualized better if you think about those parenthesis operations you did in secondary school where you do the math inside every parenthesis from inside out, bracket and square bracket until you get a final result (a total).  This time it's the same thing, look at the program flow:

#### DURING THE FIRST EXECUTION OF THE FUNCTION
```js
num = 5
```
Is 5 equal to 1 or 0?  **No** => Oki doki, let's continue...
#### RETURNS
(5 _(second execution: 4 _(third execution: 3 _(fourth execution: 2 _fifthe execution: 1))))

What it returns can be viewed as `(5 * (4 * (3 * (2 * 1))))` or just `5 * 4 * 3 * 2 * 1`, and the function will return the result of that operation: `120`.  Now, let's check what the result of the executions do:

#### DURING THE REST OF THE EXECUTIONS:
Second Execution: num = 5 - 1 = 4 -> is num 0 or 1? No 
-> return the multiplication between 4 and the next result when num is now 4 - 1.

Third Execution: num = 4 - 1 = 3 -> is num 0 or 1? No 
-> return the multiplication between 3 and the next result when num is now 3 - 1.

Fourth Execution: num = 3 - 1 = 2 -> is num 0 of 1? No 
-> return the multiplication between 2 and the next result when num is now 2 - 1.

Fifth Execution: num = 2 - 1 = 1 -> is num 0 or 1? Yep 
-> return 1.  And this is where the recursion stops because there are no more executions.

### REFERENCE LINKS
- [JS Functions](https://www.youtube.com/watch?v=R8SjM4DKK80)
- [Recursion in JS](https://www.youtube.com/watch?v=k7-N8R0-KY4)


### SOLUTION 1 EXPLAINED (AS ABOVE):
- Since the return values for the function will always be greater than or equal to 1, `product` is initialized at one.  For the case where the number is `0`, the for loop condition will be false, but since `product` is initialized as `1`, it will have the correct value when the `return` statement is executed.
- For all numbers passed to the function which are greater than one, the simple `for` loop will increment `i` by one each iteration and recalculate `product` up to the value `num`.
