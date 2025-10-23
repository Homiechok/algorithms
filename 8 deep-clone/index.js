function deepClone(data) {
  if (typeof data !== "object" || data === null) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(item => deepClone(item));
  }

  const clone = {};

  for (const key of Reflect.ownKeys(data)) {
    clone[key] = deepClone(data[key]);
  }

  return clone;
}

const data = [1,[2,3],{a:{b:{c:3}, d: 4}}];
const clone = deepClone(data); // → [1,[2,3],{a:{b:{c:3}, d: 4}}]

console.time("deepClone");
console.log(clone[2] === data[2]);
console.timeEnd("deepClone");
