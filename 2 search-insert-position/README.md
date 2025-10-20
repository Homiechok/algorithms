# Search Insert Position
https://leetcode.com/problems/search-insert-position/description/

Реализация алгоритма бинарного поиска. 
Если элемент не найден — возвращается индекс, **куда он должен быть вставлен**, чтобы сохранить порядок сортировки.
Используется для нахождения элемента в отсортированном массиве за O(log n).

**Пример:**
```js
searchInsertPosition([1,3,5,6], 5) // → 2

searchInsertPosition([1,3,5,6], 2) // → 1

searchInsertPosition([1,3,5,6], 7) // → 4
```