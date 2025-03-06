**Beginner:**

1.  **Array Sum:**

    - Given an array of numbers, write a function that returns the sum of all the numbers.
    - Example: `[1, 2, 3, 4, 5]` should return `15`.

2.  **Object Property Access:**

    - Given an object representing a person (with `name`, `age`, and `city` properties), write a function that returns a formatted string like "\[Name] is \[Age] years old and lives in \[City]".
    - Example: `{ name: 'Alice', age: 30, city: 'New York' }` should return "Alice is 30 years old and lives in New York".

3.  **Array Filtering (Even Numbers):**
    - Given an array of numbers, write a function that returns a new array containing only the even numbers.
    - Example: `[1, 2, 3, 4, 5, 6]` returns `[2,4,6]`.

**Intermediate:**

4.  **Object Grouping:**

    - Given an array of objects representing products (with `category` and `name` properties), write a function that returns an object where the keys are the categories and the values are arrays of product names in that category.
    - Example:
      ```javascript
      const products = [
        { category: "Electronics", name: "Laptop" },
        { category: "Clothing", name: "T-shirt" },
        { category: "Electronics", name: "Headphones" },
        { category: "Clothing", name: "Jeans" },
      ];
      ```
    - Should return:
      ```javascript
      {
        Electronics: ['Laptop', 'Headphones'],
        Clothing: ['T-shirt', 'Jeans'],
      };
      ```

5.  **Array of Objects Sorting:**

    - Given an array of objects representing students (with `name` and `grade` properties), write a function that sorts the array in descending order based on the `grade` property.
    - If grades are the same, then sort by name alphabetically.

6.  **Deep Object Cloning:**

    - Write a function that takes an object as input and returns a deep clone of that object. This means that nested objects and arrays should also be cloned, not just referenced.
    - This tests your understanding of object references and how to properly copy complex data structures.

7.  **Array Flattening:**
    - Given a nested array, write a function that flattens it into a single-dimensional array.
    - Example: `[1, [2, [3, 4], 5], 6]` should return `[1, 2, 3, 4, 5, 6]`.

**Code Examples and Hints:**

- **For Array Sum:** Use a `for` loop or `reduce()`.
- **For Object Property Access:** Use dot notation or bracket notation to access properties.
- **For Array Filtering:** Use the `filter()` method.
- **For Object Grouping:** Use an object to store the grouped data and iterate through the input array.
- **For Object Sorting:** Use the `sort()` method with a custom compare function.
- **For Deep Cloning:** Consider using `JSON.parse(JSON.stringify(obj))` (for simple cases) or a recursive function for more complex scenarios.
- **For Array Flattening:** Use recursion or the `flat()` method (if supported by your environment).

These challenges will help you solidify your understanding of arrays and objects in JavaScript. Good luck!
