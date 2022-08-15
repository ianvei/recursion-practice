// 1
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

// function sumRange(n) {
//     return n < 1 ? 0 : n + sumRange(n-1)
// };

// function power(a, b) {
//     if(b == 0) {
//         return 1
//     } else {

//     return a * power(a, b-1) }
// }

// function power(a, b) {
//     return b < 1 ? 1 : a * power(a, b-1);
// }

// function factorial(n) {
//     return n <= 1? 1 : n * factorial(n-1);
// }

// const callback = (num) => {
//     return num < 7;
// }

// function all(array, callback){
//     let tempArray = [...array];

//     if (tempArray.length === 0) {
//         return true;
//     }

//     if(!callback(tempArray[0])){
//         return false;
//     }

//     if (callback(tempArray[0])){
//         tempArray.shift()
//         return all(tempArray, callback)
//     }

    
// }

// console.log(all([1,2,4,3,2,6,3,3,1,6,3,3], function(num) {
//     return num < 7;
// }));

// function productOfArray(array){
//     let tempArray = [...array];

//     if (tempArray.length === 1){
//         return array[0];
//     }

//     return  tempArray.shift() * productOfArray(tempArray) 
// }

// let six = productOfArray([1,2,3]) // 6
// let sixty = productOfArray([1,2,3,10]) // 60

// console.log(six)

// const nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// function contains(object, value) {
//     for(let key in object) {
//         if(typeof object[key] === 'object') {
//             console.log(object[key])
//             return contains(object[key], value);
//         }

//         if(object[key] === value) {
//             return true;
//         }
//     }

//     return false;
// }

// function fibs(n) {
//     let startingArray = [];

//     for(let i = 0; i < n; i++){
//         if(i == 0){
//             console.log('hi')
//             startingArray.push(0)
//             continue
//         }
//         if(i == 1){
//             console.log('hi')
//             startingArray.push(1)
//             continue
//         }
//         startingArray.push(startingArray[i-1] + startingArray[i-2]);
//     }
//     return startingArray;
// }

// function fibs(n) {
//     // const tempArr = [];
//     if(n == 0) {
//         return [0];
//     }

//     if(n == 1) {
//         return [0, 1];
//     }

//     const arr = fibs(n-1)
//     return [...arr, arr[n-1] + arr[n-2]]

  

// }

// console.log(fibs(8));
// let hasIt = contains(nestedObject, 44); 
// let doesntHaveIt = contains(nestedObject, "foo"); 
// console.log(hasIt, doesntHaveIt);

// binary search

// const primes = [0, 1, 2, 3,4, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
//     41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 203, 210, 250, 300 ,500];

// const binarySearch = (array, value) => {
//     let max = array.length;
//     let min = 0;
//     let half = Math.floor(min + max / 2);
//     console.log(array.length);
//     console.log(half);
    
//     if(array[half] === value) {
//         return half;
//     }

//     if(array.length <= 1) {
//         return array[0];
//     }

//     if(array[half] < value){
//         newArray = array.slice(half);
//     } else {
//         if(array[half] > value) {
//             newArray = array.slice(0, half);
//         }
//     }
//     console.log(newArray);
//     newMin = half;
//     return binarySearch(newArray, value);

// }

// const binarySearch = (array, targetValue, min, max) => {
//     if (max < min) {
//         return -1;
//     }

//     let half = Math.floor((min + max) / 2);

//     if (array[half] === targetValue) {
//         return half;
//     }

//     if(targetValue < array[half]) {
//         return binarySearch(array, targetValue, min, (half-1));
//     } else {
//             return binarySearch(array, targetValue, (half+1), max);
//     }
// }

// console.log(binarySearch(primes, 89, 0, primes.length-1))

// const power = (base, exponent) => {
//     if(exponent < 1) {
//         return 1;
//     }

//     return base * power(base, exponent-1);
// }


// const factorial = (n) => {
//     if (n < 1) {
//         return 1;
//     }

//     return n * factorial(n-1);
// }

// const productOfArray = (arr) => {
    
//     if(arr.length <= 1) {
//         return 1;
//     }

//     const newArray = [...arr];
//     const lastValue = newArray[newArray.length - 1];
//     newArray.pop();
    
//     return  lastValue * productOfArray(newArray);
// }

// const recursiveRange = (n) => {
//     if(n < 1) {
//         return 0;
//     }
//     return n + recursiveRange(n-1);
// }

// const fib = (n) => {
//     if(n < 2) {
//         return n;
//     }

//     return fib(n-1) + fib(n-2);
// }


// console.log(fib(28));

const reverse = (string) => {
    // let newString = '';
    if (string.length <= 1) {
        return string;
    }
    // newString += string.charAt(string.length - 1);
    // newString = newString + reverse(string.slice(0, -1));
    return string[string.length-1] + reverse(string.slice(0, -1));
}


const isPalindrome = (string) => {
    if(string.length <= 1){
        return true;
    } 
    if(string[0] === string[string.length - 1]){
        return isPalindrome(string.slice(1, string.length-1));;
    } 

    return false;

    
}

const someRecursive = (arr, cb) => {
    if(!arr.length){
        return false;
    }
    if(cb(arr[0]) === true){
        return true;
    } 
    
    arr.shift()
    newArr = [...arr];
    return someRecursive(newArr, cb)
}

const isOdd = val => val % 2 !== 0;
const isGreater = val => val > 10;

// console.log(someRecursive([2,4,6,11], isGreater));

// const testArray = (arr) => {
//     let tempArray = [...arr];
//     console.log(arr)
//     if(!arr.length){
//         return;
//     }
//     if(!Array.isArray(tempArray[0])){
//         // console.log('hi')
//         newArray.push(tempArray[0]);
//         tempArray.shift();
//         return testArray(tempArray);
//     } else {
        
//         return testArray(tempArray[0]);
//     }
// }

const flatten = (arr) => {
    const newArray = [];

    const testArray = (arr) => {
        if(!arr.length){
            return;
        }
        arr.forEach((item) => {
            if(Array.isArray(item)){
                return testArray(item);
            } else {
                return newArray.push(item);
            }
        })
    }
    testArray(arr);
    return newArray;
}

// console.log(flatten([1, [2, [3, 4], [[5,6,[7]]]]]));


const nestedEvenSum = (obj) => {
    let sum = 0;
    const nestedHelper = (obj) => {
            for(let key in obj){
                if(typeof obj[key] === 'object'){
                    nestedHelper(obj[key])
                } else{
                    if(typeof obj[key] === 'number'){
                        if(obj[key] % 2 === 0){
                            sum += obj[key]
                        }
                    }
                    
                }
            }
    }
    nestedHelper(obj)
    return sum;
}



var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
// console.log(nestedEvenSum(obj2))


const collectStrings = (obj) => {
    const stringArray = [];

    const collectionHelper = (obj) => {
        for(let key in obj){
            if(typeof obj[key] === 'object')
                collectionHelper(obj[key])
            if(typeof obj[key] === 'string'){
                stringArray.push(obj[key])
            }
        }
    }
    collectionHelper(obj)
    return stringArray;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))