/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // for(let i =0;i<numbers.length;i++){
    //     if(a[i])
    // }
    numbers.sort((a,b) => a-b);
    return numbers[numbers.length - 1];
}

// const num = findLargestElement([1.9, 2.1, 3.5, 7.2, 9.8])
// console.log(num );


module.exports = findLargestElement;