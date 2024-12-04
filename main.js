const fs = require('fs');
const shellSort = require('./shellSolrt');
const insertSort = require('./insertion');
const originalGapSequence = require('./originalSequense');
const hibbardGapSequence = require('./hibbartSequence');
const generateRandomArray = require('./generateRandomArray');
const isSorted = require('./isSorted');
const { customGapSequence1, customGapSequence2, customGapSequence3 } = require('./myOwnSequences');

const clearResultFiles = require('./clearResultFiles');
clearResultFiles(); // Clear result files at the beginning

for (let size = 10000; size <= 250000; size += 10000) {
    console.log("Sorting array of size:", size);

    // Generate the same random array for all gap sequences
    const originalArray = generateRandomArray(size);

    (() => {
        // Default insert sort
        const arr = [...originalArray]; // Clone array
        const start = process.hrtime();  // Get the current high-resolution time
        insertSort(arr);
        const end = process.hrtime(start); // Get the time difference
        const timeInMs = end[0] * 1000 + end[1] / 1e6; // Convert to milliseconds
        const string = `${size} ${timeInMs}\n`;
        fs.appendFileSync('resultForInsertSort.txt', string);
        if (!isSorted(arr)) throw new Error('Array not sorted (Original Gap Sequence)');
    })();

    (() => {
        // Original Gap Sequence
        const gaps = originalGapSequence(size);
        const arr = [...originalArray]; // Clone array
        const start = process.hrtime();  // Get the current high-resolution time
        shellSort(arr, gaps);
        const end = process.hrtime(start); // Get the time difference
        const timeInMs = end[0] * 1000 + end[1] / 1e6; // Convert to milliseconds
        const string = `${size} ${timeInMs}\n`;
        fs.appendFileSync('resultForOriginal.txt', string);
        if (!isSorted(arr)) throw new Error('Array not sorted (Original Gap Sequence)');
    })();

    (() => {
        // Hibbard Gap Sequence
        const gaps = hibbardGapSequence(size);
        const arr = [...originalArray]; // Clone array
        const start = process.hrtime();  // Get the current high-resolution time
        shellSort(arr, gaps);
        const end = process.hrtime(start); // Get the time difference
        const timeInMs = end[0] * 1000 + end[1] / 1e6; // Convert to milliseconds
        const string = `${size} ${timeInMs}\n`;
        fs.appendFileSync('resultForHibbard.txt', string);
        if (!isSorted(arr)) throw new Error('Array not sorted (Hibbard Gap Sequence)');
    })();

    (() => {
        // Custom Gap Sequence 1
        const gaps = customGapSequence1(size);
        const arr = [...originalArray]; // Clone array
        const start = process.hrtime();  // Get the current high-resolution time
        shellSort(arr, gaps);
        const end = process.hrtime(start); // Get the time difference
        const timeInMs = end[0] * 1000 + end[1] / 1e6; // Convert to milliseconds
        const string = `${size} ${timeInMs}\n`;
        fs.appendFileSync('resultsForMyOwn1.txt', string);
        if (!isSorted(arr)) throw new Error('Array not sorted (Custom Gap Sequence 1)');
    })();

    (() => {
        // Custom Gap Sequence 2
        const gaps = customGapSequence2(size);
        const arr = [...originalArray]; // Clone array
        const start = process.hrtime();  // Get the current high-resolution time
        shellSort(arr, gaps);
        const end = process.hrtime(start); // Get the time difference
        const timeInMs = end[0] * 1000 + end[1] / 1e6; // Convert to milliseconds
        const string = `${size} ${timeInMs}\n`;
        fs.appendFileSync('resultsForMyOwn2.txt', string);
        if (!isSorted(arr)) throw new Error('Array not sorted (Custom Gap Sequence 2)');
    })();

    (() => {
        // Custom Gap Sequence 3
        const gaps = customGapSequence3(size);
        const arr = [...originalArray]; // Clone array
        const start = process.hrtime();  // Get the current high-resolution time
        shellSort(arr, gaps);
        const end = process.hrtime(start); // Get the time difference
        const timeInMs = end[0] * 1000 + end[1] / 1e6; // Convert to milliseconds
        const string = `${size} ${timeInMs}\n`;
        fs.appendFileSync('resultsForMyOwn3.txt', string);
        if (!isSorted(arr)) throw new Error('Array not sorted (Custom Gap Sequence 3)');
    })();

    // Explicitly nullify the original array to free memory
    originalArray.length = 0;
}
