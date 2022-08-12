// 1
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(n) {
    return n < 1 ? 0 : n + sumRange(n-1)
};

function power(a, b) {
    if(b == 0) {
        return 1
    } else {

    return a * power(a, b-1) }
}

function power(a, b) {
    return b < 1 ? 1 : a * power(a, b-1);
}

function factorial(n) {
    return n <= 1? 1 : n * factorial(n-1);
}

const callback = (num) => {
    return num < 7;
}

function all(array, callback){
    let tempArray = [...array];

    if (tempArray.length === 0) {
        return true;
    }

    if(!callback(tempArray[0])){
        return false;
    }

    if (callback(tempArray[0])){
        tempArray.shift()
        return all(tempArray, callback)
    }

    
}

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

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(object, value) {
    for(let key in object) {
        if(typeof object[key] === 'object') {
            console.log(object[key])
            return contains(object[key], value);
        }

        if(object[key] === value) {
            return true;
        }
    }

    return false;
}

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

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

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

const binarySearch = (array, targetValue, min, max) => {
    if (max < min) {
        return -1;
    }

    let half = Math.floor((min + max) / 2);

    if (array[half] === targetValue) {
        return half;
    }

    if(targetValue < array[half]) {
        return binarySearch(array, targetValue, min, (half-1));
    } else {
            return binarySearch(array, targetValue, (half+1), max);
    }
}

console.log(binarySearch(primes, 73, 0, primes.length-1))