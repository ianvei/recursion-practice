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

// let hasIt = contains(nestedObject, 44); 
// let doesntHaveIt = contains(nestedObject, "foo"); 
// console.log(hasIt, doesntHaveIt);