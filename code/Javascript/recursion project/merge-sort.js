// Merge Sort - Recursive Implementation
function mergeSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide: Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Conquer: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Combine: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right, add smaller to result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from left (if any)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add remaining elements from right (if any)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// ============ TESTS ============
console.log("===== MERGE SORT TESTS =====\n");

const testCases = [
    [],
    [73],
    [1, 2, 3, 4, 5],
    [3, 2, 1, 13, 8, 5, 0, 1],
    [105, 79, 100, 110],
    [9, 3, 7, 4, 6, 1, 2, 8],
    [5, 5, 5, 5],
    [2, 1],
];

const expectedResults = [
    [],
    [73],
    [1, 2, 3, 4, 5],
    [0, 1, 1, 2, 3, 5, 8, 13],
    [79, 100, 105, 110],
    [1, 2, 3, 4, 6, 7, 8, 9],
    [5, 5, 5, 5],
    [1, 2],
];

testCases.forEach((test, index) => {
    const result = mergeSort(test);
    const expected = expectedResults[index];
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`Test ${index + 1}: ${passed ? "✓ PASS" : "✗ FAIL"}`);
    console.log(`  Input:    [${test}]`);
    console.log(`  Output:   [${result}]`);
    console.log(`  Expected: [${expected}]\n`);
});
