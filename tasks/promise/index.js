// //1. 1 ces daraa Hello world gesen text uguh promise bich
// const doPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("hello world");
//   }, 2000);
// });
// console.log(doPromise.then((response) => console.log(response)));

// // 2. 1 sec tutam counter gesen huvisagciig 1 eer ahiulj hewle
// let counter = 0;
// const interval = setInterval(() => {
//   const secondPromise = new Promise((resolve) => {
//     resolve(counter);
//   });
//   counter++;

//   secondPromise.then((res) => console.log(res));
// }, 1000);

// const stopPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(true);
//   }, 5000);
// });

// stopPromise.then((response) => {
//   if (response) {
//     clearInterval(interval);
//   }
// });

// 3. 2 sec tutam des daraallan step1, step2 gsen text hewle
// let count = 1;
// setInterval(() => {
//   const stepPromise = new Promise((resolve, reject) => {
//     resolve(`step ${count}`);
//     count++;
//     reject("something went wrong");
//   });
//   stepPromise.then((res) => console.log(res));
// }, 2000);

//4 something went wrong gj hewle
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Something went wrong");
//   }, 2000);
// });
// console.log(doPromise.catch((response) => console.log(response)));

//5.

const nums = [1, 2, 3, 4, 5];
let sum = 0;
let index = 0;
const interval = setInterval(() => {
  const sumPromise = new Promise((resolve) => {
    sum += nums[index];
    index++;
    resolve(sum);
  });
  sumPromise.then((res) => console.log(res));
  if (index == nums.length) {
    clearInterval(interval);
  }
}, 1000);
