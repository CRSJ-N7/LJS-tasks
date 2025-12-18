// let company = {
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 600
//   }],

//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],

//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };

// const sumSalaries = (arr) => {
//     if (Array.isArray(arr)) {
//        return arr.reduce((prev, current) => prev + current.salary, 0)
//     } else {
//         let sum = 0;
//         for (let sub of Object.values(arr)) {
//             sum += sumSalaries(sub);
//         }
//         return sum;
//     }
// }

// sumSalaries(arr);

// const data = {
//   a: 5,
//   b: {
//     c: 10,
//     d: {
//       e: 3
//     }
//   },
//   f: 7
// };

// const data2 = { a: 5 };
// const data3 = { a: 5, b: 2, c: { a: 1, b: 2} };

// const sumNumbers = (obj) => {
//     if (typeof obj !== 'object') {
//         return obj;
//     }
//     let sum = 0;

//     for (let values of Object.values(obj)) {
//         sum += sumNumbers(values);
//     }
//     return sum;

// }

// console.log(sumNumbers(data3));

// const data = {
//   a: [1, 2, 3],
//   b: {
//     c: [4, 5],
//     d: {
//       e: 6
//     }
//   },
//   f: 7
// };

// const sumDeep = (obj) => {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }

//     let sum = 0;

//     if (Array.isArray(obj)) {
//         console.log(`array = ${obj}`);
//         return obj.reduce((prev, current) => prev + current, 0);
//     } else {
//         console.log(`obj = ${obj}`);

//     for (let values of Object.values(obj)) {
//         sum += sumDeep(values);
//     }

//         return sum;
// }
// }

// console.log(sumDeep(data));

const data = {
  a: [1, "string", [3, 4]],
  b: {
    c: [4, 5],
    d: {
      e: 6,
      f: null,
      g: [7, { h: 8, i: [9] }],
    },
  },
  f: 7,
  g: "hello",
  h: true,
};

// const sumAllNumbers = (obj) => {
//   if (typeof obj === "number") {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//   let sum = 0;
//     for (let values of Object.values(obj)) {
//       console.log(`in array for..of: ${values}`);
//       sum += sumAllNumbers(values);
//     }
//     return sum;
//   }

//   if (typeof obj === "object" && obj !== null) {
//   let sum = 0;
//     for (let values of Object.values(obj)) {
//       console.log(`in object for..of: ${values}`);

//       sum += sumAllNumbers(values);
//     }
//     return sum;
//   }

//   return 0;
// };

const sumAllNumbers = (obj) => {
  if (typeof obj === "number") {
    return obj;
  }

  if (typeof obj === "object" && obj !== null) {
    let sumObj = 0;
    for (let keys of Object.values(obj)) {
      sumObj += sumAllNumbers(keys);
    }
    return sumObj;
  }

  return 0;
};

console.log(sumAllNumbers(data));
