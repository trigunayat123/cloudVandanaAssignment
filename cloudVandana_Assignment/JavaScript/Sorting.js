function mergeSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return mergeDescending(mergeSortDescending(left), mergeSortDescending(right));
}

function mergeDescending(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const originalArray = [5, 2, 9, 1, 5, 6];
const sortedArray = mergeSortDescending(originalArray);

console.log("Sorted array in descending order: " + sortedArray.join(', '));
