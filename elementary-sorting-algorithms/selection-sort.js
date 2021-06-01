const helpers = require('./helpers');

function selectionSort(arr) {
    let firstElIndex = 0,
        smallestElIndex = 0;

    for (let i = 0; i < arr.length; ++i) {
        firstElIndex = i;
        smallestElIndex = i;

        for (let j = i + 1; j < arr.length; ++j) {
            if(arr[smallestElIndex] > arr[j]) smallestElIndex = j;
        }

        if(firstElIndex !== smallestElIndex) helpers.swap(arr, firstElIndex, smallestElIndex);

    }
}

const arrToSort = [1, 5, 3, 2 , 6, 0];

console.log(arrToSort);

selectionSort(arrToSort);

console.log(arrToSort);