Sure, let's go through the factorial function step by step:

```javascript
function factorial(n) {
```
1. The function `factorial` is defined, taking a single parameter `n`.

```javascript
  if (n === 0) { // Base case
```
2. The function checks if `n` is equal to 0. This is the base case for the recursion.

```javascript
    return 1;
```
3. If `n` is 0, the function returns 1. This is because the factorial of 0 is defined as 1.

```javascript
  }
```
4. The closing curly brace ends the if statement for the base case.

```javascript
  return n * factorial(n - 1); // Recursive case
```
5. If `n` is not 0, the function returns the result of multiplying `n` by the factorial of `n - 1`. This is the recursive case.

6. The function `factorial` is called again with `n - 1` as the argument. This is the recursive call.

```javascript
}
```
7. The closing curly brace ends the `factorial` function definition.

Let's see how the function works when called with `factorial(5)`:

1. `factorial(5)` is called.
2. Since `5` is not equal to 0, the base case is not met.
3. The function returns `5 * factorial(4)`.
4. `factorial(4)` is called.
5. Since `4` is not equal to 0, the base case is not met.
6. The function returns `4 * factorial(3)`.
7. `factorial(3)` is called.
8. Since `3` is not equal to 0, the base case is not met.
9. The function returns `3 * factorial(2)`.
10. `factorial(2)` is called.
11. Since `2` is not equal to 0, the base case is not met.
12. The function returns `2 * factorial(1)`.
13. `factorial(1)` is called.
14. Since `1` is not equal to 0, the base case is not met.
15. The function returns `1 * factorial(0)`.
16. `factorial(0)` is called.
17. Since `0` is equal to 0, the base case is met.
18. The function returns `1`.
19. The recursion starts unwinding:
    - `factorial(1)` returns `1 * 1 = 1`
    - `factorial(2)` returns `2 * 1 = 2`
    - `factorial(3)` returns `3 * 2 = 6`
    - `factorial(4)` returns `4 * 6 = 24`
    - `factorial(5)` returns `5 * 24 = 120`

The final result is `120`, which is the factorial of 5.