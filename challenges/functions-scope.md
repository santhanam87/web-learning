**Beginner:**

1.  **Simple Function with Return:**

    - Write a function called `addNumbers` that takes two numbers as arguments and returns their sum.
    - Example: `addNumbers(5, 3)` should return `8`.

2.  **Function with Conditional Logic:**

    - Write a function called `isEven` that takes a number as an argument and returns `true` if the number is even, and `false` if it is odd.
    - Example: `isEven(4)` should return `true`, and `isEven(7)` should return `false`.

3.  **Variable Scope (Basic):**

    - Explain the output of the following code and why:

      ```javascript
      let x = 10;

      function myFunction() {
        console.log(x);
      }

      myFunction();
      ```

**Intermediate:**

4.  **Closures:**

    - Write a function called `createCounter` that returns another function. The returned function should increment a counter variable each time it's called and return the current count.
    - Example:
      ```javascript
      const counter = createCounter();
      console.log(counter()); // Output: 1
      console.log(counter()); // Output: 2
      console.log(counter()); // Output: 3
      ```

5.  **Function Expressions and Hoisting:**

    - Explain the output of the following code and why:

      ```javascript
      console.log(myVar); //output 1
      console.log(myFunction()); //output 2

      var myVar = 5;

      function myFunction() {
        return "Hello";
      }

      console.log(myVar); //output 3
      console.log(myFunction()); //output 4

      const myFuncExpression = function () {
        return "expression";
      };

      console.log(myFuncExpression()); //output 5

      console.log(myOtherFuncExpression()); //output 6

      var myOtherFuncExpression = function () {
        return "another expression";
      };
      ```

    - Pay close attention to variable declarations, function declarations, and function expressions.

6.  **Scope and `this` Keyword:**

    - Create an object with a method that uses the `this` keyword. Explain how the `this` keyword behaves in different contexts.
    - Example:

      ```javascript
      const myObject = {
        value: 42,
        getValue: function () {
          return this.value;
        },
      };

      console.log(myObject.getValue()); // Output: 42

      const getValueFunc = myObject.getValue;
      console.log(getValueFunc()); // Output: undefined (or something else, depending on the environment)
      ```

    - Explain why the second `console.log` produces a different result.

7.  **Immediately Invoked Function Expressions (IIFEs):**
    - Write an IIFE that creates a private variable and a function that can access and modify that variable.
    - Explain the purpose of using IIFEs.

**Hints and Explanations:**

- **For Simple Functions:** Focus on function syntax, parameters, and the `return` keyword.
- **For Conditional Logic:** Use `if...else` statements or the ternary operator.
- **For Variable Scope:** Understand the difference between global and local scope, and how variables are accessed within functions.
- **For Closures:** Pay attention to how inner functions can access variables from their outer (enclosing) functions, even after the outer function has finished executing.
- **For Hoisting:** Understand how variable and function declarations are moved to the top of their scope during compilation.
- **For `this` Keyword:** Remember that the value of `this` depends on how a function is called.
- **For IIFEs:** Recognize that IIFEs create a new scope, preventing variable collisions and creating private variables.

These challenges will help you deepen your understanding of functions and scope in JavaScript. Good luck!
