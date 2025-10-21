# Sort by function

https://leetcode.com/problems/sort-by/description/

Реализовано 2 способа сортировки по функциям:
  1. Медленная сортировка через перебор.
  2. Быстрая сортировка через метод sort.

**Пример:**
```js
sortByFunction(
  [{"x": 1}, {"x": 0}, {"x": -1}], 
  (d) => d.x
) // → [{"x": -1}, {"x": 0}, {"x": 1}]
```