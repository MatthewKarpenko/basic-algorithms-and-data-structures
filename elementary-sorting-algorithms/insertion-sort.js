const helpers = require('./helpers');

function insertionSort(arr) {
    const arrLength = arr.length;
    
    for (let i = 1; i < arrLength; ++i) {
        let el = arr[i];

        for (let j = i - 1; j >= 0 && arr[j] > el; --j) {
            const prevEl = arr[j];

            if(el < prevEl)  {
                helpers.swap(arr, i, j); 
                i = j;
            }
        }
    }
}

const arrToSort = [1, 5, 3, 2 , 6, 0];

console.log(arrToSort);

insertionSort(arrToSort);

console.log(arrToSort);