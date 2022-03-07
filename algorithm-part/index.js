// 1. Please write a function that shows the usage of closures
function main() {
    console.log(sumArrayItems([1, 2, 3, 4, 5]));

    console.log(
        flattenListOfItemsRecursively([[1], 2, 3, [4, 5, 6], [7, 8, [9, 10]]])
    );

    console.log(
        findCommonElementsOfTwoArrays(
            ['b', 3, 4, 76, 'c'],
            ['a', 'b', 4, 76, 21, 'e']
        )
    );

    console.log(
        findDifferentElementsOfTwoArrays(
            ['b', 3, 4, 76, 'c'],
            ['a', 'b', 4, 76, 21, 'e']
        )
    );

    console.log(zipArrays([1, 2, 3], [4, 5, 6, 7]));

    console.log(
        getValueAtPath(['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } })
    );

    console.log(compareObjects({ a: 'b', c: 'd' }, { c: 'e', a: 'b' }));

    console.log(
        removeKeysFromObject(['color', 'size'], {
            color: 'Blue',
            id: '22',
            size: 'xl',
        })
    );
}

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

function sumArrayItems(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

function flattenListOfItemsRecursively(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (Array.isArray(list[i])) {
            result = result.concat(flattenListOfItemsRecursively(list[i]));
        } else {
            result.push(list[i]);
        }
    }

    return result;
}

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

function findCommonElementsOfTwoArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                result.push(array1[i]);
            }
        }
    }
    return result;
}

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

function findDifferentElementsOfTwoArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        let isFound = false;
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            result.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        let isFound = false;
        for (let j = 0; j < array1.length; j++) {
            if (array2[i] === array1[j]) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            result.push(array2[i]);
        }
    }

    return result;
}

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

function zipArrays(array1, array2) {
    let maxLength = Math.min(array1.length, array2.length);
    console.log(maxLength);
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        result.push([array1[i], array2[i]]);
    }

    return result;
}

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

function getValueAtPath(path, object) {
    let result = object;
    for (let i = 0; i < path.length; i++) {
        if (result[path[i]] === undefined) {
            return undefined;
        }
        result = result[path[i]];
    }
    return result;
}

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

function compareObjects(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }

    for (let key in object1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

function removeKeysFromObject(keys, object) {
    for (let key in keys) {
        delete object[keys[key]];
    }
    return object;
}

main();
