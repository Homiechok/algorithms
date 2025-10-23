# Deep Clone

https://bigfrontend.dev/problem/create-cloneDeep

Реализовано глубокое клонирование с помощью рекурсии.

**Пример:**
```js
const data = [1,[2,3],{a:{b:{c:3}, d: 4}}];

const clone = deepClone(data); // → [1,[2,3],{a:{b:{c:3}, d: 4}}]
console.log(clone[2] === data[2]); // → false
```