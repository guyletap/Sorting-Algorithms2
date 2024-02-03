function randomizeDataNumbers() {
    const dataInput = document.getElementById('dataInputNumbers');
    const inputData = dataInput.value.split(',').map(item => item.trim());
    const randomizedData = shuffleArray(inputData);
    displayResultNumbers(randomizedData);
}

function sortDataNumbers() {
    const dataInput = document.getElementById('dataInputNumbers');
    const inputData = dataInput.value.split(',').map(item => item.trim());
    const sortedData = mergeSort(inputData, compareNumbers);
    displayResultNumbers(sortedData);
}

function randomizeDataNames() {
    const dataInput = document.getElementById('dataInputNames');
    const inputData = dataInput.value.split(',').map(item => item.trim());
    const randomizedData = shuffleArray(inputData);
    displayResultNames(randomizedData);
}

function sortDataNames() {
    const dataInput = document.getElementById('dataInputNames');
    const inputData = dataInput.value.split(',').map(item => item.trim());
    const sortedData = mergeSort(inputData, compareNames);
    displayResultNames(sortedData);
}

function shuffleArray(array) {
    // Function to shuffle the array (randomize)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function mergeSort(arr, compareFunction) {
    // Implement the Merge Sort algorithm
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, mid), compareFunction);
    const rightHalf = mergeSort(arr.slice(mid), compareFunction);
    return merge(leftHalf, rightHalf, compareFunction);
}

function merge(left, right, compareFunction) {
    // Merge two sorted arrays
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (compareFunction(left[leftIndex], right[rightIndex]) <= 0) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    
    return result;
}

function compareNumbers(a, b) {
    // Custom comparison function for numbers
    return a - b;
}

function compareNames(a, b) {
    // Custom comparison function for names
    return a.localeCompare(b);
}

function displayResultNumbers(result) {
    const resultArea = document.getElementById('resultAreaNumbers');
    resultArea.textContent = `Sorted Numbers: ${result.join(', ')}`;
}

function displayResultNames(result) {
    const resultArea = document.getElementById('resultAreaNames');
    resultArea.textContent = `Sorted Names: ${result.join(', ')}`;
}
