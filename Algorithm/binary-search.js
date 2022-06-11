const arr = [1, 2, 5, 8, 12, 42, 67, 99, 120];

let notFound = true;

const binarySearch = (arr, n) => {
  let low = 0;
  let high = arr.length;
  while (notFound) {
    const mid = Math.floor((low + high) / 2);
    if (high - low <= 1) {
      console.log(`Not in Array`);
      notFound = false;
    }
    if (n === arr[mid]) {
      console.log(`found at ${mid}`);
      notFound = false;
    } else if (n < arr[mid]) {
      high = mid;
    } else if (n > arr[mid]) {
      low = mid;
    }
  }
};

binarySearch(arr, 42);
