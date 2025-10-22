# Flatten Deeply Nested Array

https://leetcode.com/problems/flatten-deeply-nested-array/description/

Реализовано уменьшение вложенности массива на заданное кол-во уровней с помощью рекурсии за O(n).

**Пример:**
```js
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, [10], 11], 12], [13, 14, 15]];

flat(arr, 2) // → [1, 2, 3, 4, 5, 6, 7, 8, 9, [10], 11, 12, 13, 14, 15]
```