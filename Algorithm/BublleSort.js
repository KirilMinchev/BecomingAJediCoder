const arr = [9, 5, 12, 10, 20, 3];
//                                purva interaciq!! i = 0
// sravnqvam index 0 = 9 s index 1 = 5 razmenqmgi
// arr = [5,9,10,20,12,3];
//                       i = 1 vtora iteraciq
// sravnqvam index 1 = 9 s index 2 = 10 ostavata taka
// i = 2 treta iteraciq
// stavnqvam index 2 = 10 s index 3 = 20 ostava taka
// i = 3 chetvurta iteraciq
// stavnqvam index 3 = 20 s index 4 = 12 razmenqm gi
// arr = [5,9,10,12,20,3];
// i = 4 5-ta iteraciq
// sravnim inex 4 = 20 s index  5 = 3 razmenqm gi
//  arr = [5,9,10,12,3,20]
let notSorted = true;
const steP = () => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      notSorted = true;
    }
  }
  console.log(arr);
};

while (notSorted) {
  notSorted = false;
  steP();
}

// let notSorted = true;
// while (notSorted) {
//   notSorted = false;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       const temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       notSorted = true;
//     }
//   }
// }
// console.log(arr);
