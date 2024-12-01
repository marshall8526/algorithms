const fs = require('fs');
const shellSort = require('./shellSolrt');
const insertSort = require('./insertion')
const originalGapSequence = require('./originalSequense');
const hibbardGapSequence = require('./hibbartSequence');
const generateRandomArray = require('./generateRandomArray');
const isSorted = require('./isSorted');
const { customGapSequence1, customGapSequence2, customGapSequence3 } = require('./myOwnSequences');

const clearResultFiles = require('./clearResultFiles');
clearResultFiles(); // Clear result files at the beginning



    const size = 250000

    const originalArray = generateRandomArray(size);

    (() => {
        // Default insert sort
        const arr = [...originalArray]; // Clone array
        const now = Date.now();
        insertSort(arr);
        const string = `${size} ${Date.now() - now}\n`;
        console.log(string);
        
        if (!isSorted(arr)) throw new Error('Array not sorted (Original Gap Sequence)');
    })();


    (() => {
        // Original Gap Sequence
        const gaps = originalGapSequence(size);
        const arr = [...originalArray]; // Clone array
        const now = Date.now();
        shellSort(arr, gaps);
        const string = `${size} ${Date.now() - now}\n`;
        console.log(string);

        if (!isSorted(arr)) throw new Error('Array not sorted (Original Gap Sequence)');
    })();
