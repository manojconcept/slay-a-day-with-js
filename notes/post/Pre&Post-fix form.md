
# Increment/decrement

## Postfix Form i++

Sure, let's break it down step by step using a table:

| Step | Code          | Explanation                                         | Value of `i` | Value of `a` |
|------|---------------|-----------------------------------------------------|--------------|--------------|
| 1    | `let i = 0;`  | Declare variable `i` and initialize it to `0`.     | 0            | Undefined    |
| 2    | `let a = i++;`| Assign the current value of `i` (0) to `a`. Then, increment `i` by 1 after the assignment. | 1            | 0            |
| 3    | `console.log(a);` | Output the value of `a` to the console.       | 1            | 0            |

So, after running this code, you'll see `0` printed in the console. The value of `i` will be `1` after this code executes.

## Prefix Form ++i

Let's go through this step by step using a table:

| Step | Code          | Explanation                                         | Value of `i` | Value of `a` |
|------|---------------|-----------------------------------------------------|--------------|--------------|
| 1    | `let i = 0;`  | Declare variable `i` and initialize it to `0`.     | 0            | Undefined    |
| 2    | `let a = ++i;`| Increment `i` by 1 and then assign the incremented value of `i` to `a`. | 1            | 1            |
| 3    | `console.log(a);` | Output the value of `a` to the console.       | 1            | 1            |

After running this code, you will see `1` printed in the console. The value of `i` will be `1` after this code executes.
