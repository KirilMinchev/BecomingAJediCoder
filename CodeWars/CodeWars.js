const squareDigits = (num) => {
  const arr = String(num).split("");
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * arr[i]);
  }
  return Number(arr2.join(""));
};
// console.log(squareDigits(3289205));
// const array = [
//   [-1, 4, -5, -9, 3],
//   [6, -4, -7, 4, -5],
//   [3, 5, 0, -9, -1],
//   [1, 5, -7, -8, -9],
//   [-3, 2, 1, -5, 6],
// ];
const matrixArrat = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] < 0) {
      arr[i][i] = 0;
    } else {
      arr[i][i] = 1;
    }
  }
  return arr;
};
// console.log(arr);
const arr = [
  [0, 4, 8, 5], //17
  [2, 4, 7, 1], // 14
  [7, 5, 3, 2], // 17
  [2, 9, 2, 6], //19
];
const sumOfArr = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    const insideArr = arr[i];
    let sum = 0;
    for (let j = 0; j < insideArr.length; j++) {
      sum += insideArr[j];
    }
    product *= sum;
  }
  return product;
};
console.log(sumOfArr(arr));
/* secondArr = []
i = 0 
  arr[i] =  [0, 4, 8, 5]
  sum = 0
  j = 0
    arr[i][j] = 0 
    sum = 0
  j = 1
    arr[i][j] = 4
    sum = 0 + 4 = 4
  j = 2
    arr[i][j] = 8
    sum = 4 + 8 = 12
  j = 3
    arr[i][j] = 5
    sum = 12 + 5 = 17
  secondarr = [17]
i = 1
  arr[i] = [2, 4, 7, 1]
  sum = 0
  j = 0
    arr[i][j] = 2
    sum = 0 + 2 = 2
  j = 1
    arr[i][j] = 4
    sum = 2 + 4 = 6
  j = 2
    arr[i][j] = 7
    sum = 6 + 7 = 13
  j = 3
    arr[i][j] = 1
    sum = 13 + 1 = 14
  secondArr = [17, 14]





*/

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// const moveZeros = (arr) => {
//   let notSorted = true;
//   let temp;
//   while (notSorted) {
//     notSorted = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) {
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         notSorted = true;
//       }
//     }
//   }
//   return arr;
// };
// moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
