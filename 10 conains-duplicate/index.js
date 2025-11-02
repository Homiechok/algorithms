function hasDuplicate(nums) {
  const arr = new Map();

  for (let num of nums) {
    if (arr.has(num)) {
      return true;
    } else {
      arr.set(num, num);
    }
  }

  return false;
}

const nums = [3, 5, 1, 9, 2, 99, 0];

console.time("hasDuplicate");
console.log(hasDuplicate(nums));
console.timeEnd("hasDuplicate");
