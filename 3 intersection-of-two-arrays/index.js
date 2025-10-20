// function intersection(nums1, nums2) {
//   let object1 = new Set(nums1);
//   let array1 = Array.from(object1);
//   array1.sort((a, b) => a - b);
//   let object2 = new Set(nums2);
//   let array2 = Array.from(object2);
//   array2.sort((a, b) => a - b);
//
//   let lowerNums = (array1.length <= array2.length) ? array1 : array2;
//   let biggerNums = (array1.length <= array2.length) ? array2 : array1;
//
//   let min = 0;
//   let max = biggerNums.length - 1;
//
//   let array = [];
//   let step = 0;
//
//   while (step < lowerNums.length) {
//     while (min <= max) {
//       let mid = Math.floor((min + max) / 2);
//       let result = biggerNums[mid];
//
//       if (lowerNums[step] === result) {
//         array.push(result)
//         break;
//       }
//       if (lowerNums[step] < result) {
//         max = mid - 1;
//       } else {
//         min = mid + 1;
//       }
//     }
//
//     step++
//     min = 0;
//     max = biggerNums.length - 1;
//   }
//
//   return array;
// }

function intersection(nums1, nums2) {
  let lowerNums = (nums1.length <= nums2.length) ? nums1 : nums2;
  let biggerNums = (nums1.length <= nums2.length) ? nums2 : nums1;
  const set = new Set(biggerNums);
  const result = [];

  for (let i = 0; i < lowerNums.length; i++) {
    if (set.has(lowerNums[i])) {
      result.push(lowerNums[i]);
      set.delete(lowerNums[i]);
    }
  }

  return result;
}

const nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
const nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];

console.time("binarySearch");
console.log(intersection(nums1, nums2));
console.timeEnd("binarySearch");