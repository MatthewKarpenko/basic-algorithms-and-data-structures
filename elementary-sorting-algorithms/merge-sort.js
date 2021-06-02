const helpers = require('./helpers');
// first try
// function merge(arr1, arr2) {
//     const mergedArr  = [];

//     let arr1Index = 0,
//         arr2Index = 0;

//     let arr1Length = arr1.length,
//         arr2Length = arr2.length;

//     for (let i = 0; i < arr1Length > arr2Length ? arr1Length : arr2Length; ++i) {
//         const arr1El = arr1[arr1Index],
//               arr2El = arr2[arr2Index];

//         if(arr1El < arr2El) {
//             mergedArr.push(arr1El);

//             arr1Index ++;
//             arr1Length --;
//         }else {
//             mergedArr.push(arr2El);

//             arr2Index ++;
//             arr2Length --;
//         }

//         if(!arr1Length) {
//             for (let i = arr2Index; i < arr2.length; ++i) {
//                 mergedArr.push(arr2[i]);    
//             }

//             break;
//         }

//         if(!arr2Length) {
//             for (let i = arr1Index; i < arr1.length; ++i) {
//                 mergedArr.push(arr1[i]);    
//             }

//             break;
//         }
//     }
        
//     console.log(mergedArr);

//     return mergedArr;
// }

//second try
// function merge2(arr1, arr2) {
//     const mergedArr  = [];

//     let arr1Index = 0,
//         arr2Index = 0;

//     let arr1Length = arr1.length,
//         arr2Length = arr2.length;

//     while(arr1Length && arr2Length) {
//         const arr1El = arr1[arr1Index],
//               arr2El = arr2[arr2Index];

//         if(arr1El < arr2El) {
//             mergedArr.push(arr1El);

//             arr1Index ++;
//             arr1Length --;
//         }else {
//             mergedArr.push(arr2El);

//             arr2Index ++;
//             arr2Length --;
//         }
//     }
        
//     if(!arr1Length) {
//         for (let i = arr2Index; i < arr2.length; ++i) {
//             mergedArr.push(arr2[i]);    
//         }
//     }

//     if(!arr2Length) {
//         for (let i = arr1Index; i < arr1.length; ++i) {
//             mergedArr.push(arr1[i]);    
//         }
//     }

//     console.log(mergedArr);

//     return mergedArr;
// }

//third try
function merge(arr1, arr2){
    let mergedArr = [],
        i = 0,
        j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    
    return mergedArr;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2),
        leftSide = mergeSort(arr.slice(0, mid)),
        rightSide = mergeSort(arr.slice(mid));

    return merge(leftSide, rightSide);
}

// merge([2, 14, 99, 100, 110, 120], [1, 10, 50, 60, 90, 130]);

const mergeSortedArr = mergeSort([2, 1, 30, 20, 10, 90, 60, 1]);

console.log(mergeSortedArr);