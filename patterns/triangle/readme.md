# Triangle Pattern's
Pattern : `T1`
```bash
1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
```
let's break down the code first:

```javascript
console.log(">>>leftAngleTriangle pattern 1")
let leftAngleTriangle ="";
for (let i = 1;i<=10;i++){
    for(let j=1;j<=i;j++){
        leftAngleTriangle += i
    }
    leftAngleTriangle +="\n"
}
console.log(leftAngleTriangle.trim());
```

This JavaScript code is intended to print a left-angled triangle pattern. Let's explain it step by step:

1. **Console Output**: 
   ```javascript
   console.log(">>>leftAngleTriangle pattern 1")
   ```
   This line prints a header indicating the start of the left-angle triangle pattern.

2. **Loop Initialization**: 
   ```javascript
   let leftAngleTriangle ="";
   ```
   Initializes an empty string `leftAngleTriangle` which will store the pattern.

3. **Outer Loop (Rows)**: 
   ```javascript
   for (let i = 1;i<=10;i++){
   ```
   This loop controls the number of rows in the triangle. It starts from `i=1` and goes up to `i=10`.

4. **Inner Loop (Columns)**: 
   ```javascript
   for(let j=1;j<=i;j++){
   ```
   This loop controls the number of columns (or characters) in each row. It starts from `j=1` and goes up to the current value of `i`.

5. **Building the Pattern**: 
   ```javascript
   leftAngleTriangle += i
   ```
   It concatenates the value of `i` to the `leftAngleTriangle` string. So, each row contains the number `i` repeated `i` times. This creates a left-angled pattern.

6. **New Line**: 
   ```javascript
   leftAngleTriangle +="\n"
   ```
   After each row is complete, it appends a newline character to move to the next line.

7. **Outputting the Triangle**: 
   ```javascript
   console.log(leftAngleTriangle.trim());
   ```
   Finally, it logs the triangle pattern to the console after trimming any whitespace from the ends of the string.

Now, let's explain the table with rows and columns:

- **Rows**: Correspond to the variable `i` in the outer loop. Each row represents a line in the triangle.
- **Columns**: Correspond to the variable `j` in the inner loop. Each column represents the characters (or numbers) in a row.

For instance, in the first row (`i=1`), there is one column (`j=1`) with the value `1`. In the second row (`i=2`), there are two columns (`j=1` and `j=2`) with the value `2`. This pattern continues up to the tenth row (`i=10`).

```
Step 1:
Row | Columns (Values)
-----------------------
  1 |   1

Step 2:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2

Step 3:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2
  3 |   3 3 3

Step 4:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2
  3 |   3 3 3
  4 |   4 4 4 4

Step 5:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2
  3 |   3 3 3
  4 |   4 4 4 4
  5 |   5 5 5 5 5

Step 6:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2
  3 |   3 3 3
  4 |   4 4 4 4
  5 |   5 5 5 5 5
  6 |   6 6 6 6 6 6

Step 7:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2
  3 |   3 3 3
  4 |   4 4 4 4
  5 |   5 5 5 5 5
  6 |   6 6 6 6 6 6
  7 |   7 7 7 7 7 7 7

Step 8:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2
  3 |   3 3 3
  4 |   4 4 4 4
  5 |   5 5 5 5 5
  6 |   6 6 6 6 6 6
  7 |   7 7 7 7 7 7 7
  8 |   8 8 8 8 8 8 8 8

Step 9:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2
  3 |   3 3 3
  4 |   4 4 4 4
  5 |   5 5 5 5 5
  6 |   6 6 6 6 6 6
  7 |   7 7 7 7 7 7 7
  8 |   8 8 8 8 8 8 8 8
  9 |   9 9 9 9 9 9 9 9 9

Step 10:
Row | Columns (Values)
-----------------------
  1 |   1
  2 |   2 2
  3 |   3 3 3
  4 |   4 4 4 4
  5 |   5 5 5 5 5
  6 |   6 6 6 6 6 6
  7 |   7 7 7 7 7 7 7
  8 |   8 8 8 8 8 8 8 8
  9 |   9 9 9 9 9 9 9 9 9
 10 |  10 10 10 10 10 10 10 10 10 10

```
---