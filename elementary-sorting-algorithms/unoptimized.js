function intBubbleSort(arr) {
    let countIterations = 0;

    for (let i = arr.length - 1; i >= 0; --i) {
        countIterations ++;

        for (let j = 0; j < i; ++j) {
            // non optimized, loop continues to run even if all elements are already sorted
            //compare number of iterations in optimized.js file
            console.log(arr, arr[j], arr[j + 1]); 

            if(arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }

    console.log('number of iterations: ', countIterations);
}

function swap(arr, idx1, idx2) {
    const temp = arr[idx1]; 

    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const arrToSort = [8, 1, 2, 3, 4, 5, 28];

intBubbleSort(arrToSort);
console.log(arrToSort);