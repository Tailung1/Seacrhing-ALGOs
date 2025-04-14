// Linear Search --- O(n)

// let arr = [4, 23, 12, 64, 7, 7, 1];

// function findTarget(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findTarget(arr, 642));

// Binary Search

let arr = [1, 4, 7, 9, 13, 34, 233];

function findTarget(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(findTarget(arr, 13));
