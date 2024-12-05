// gap = floor(n / (2^k)) - k
function customGapSequence1(n) {
    const gaps = [];
    let k = 1;
    let gap = n; 
    while (gap > 1) {
        gap = Math.floor(n / (2 ** k)) - k; 
        if (gap > 1) gaps.push(gap); 
        k++;
    }
    gaps.push(1); 
    return gaps;
}

//  gap = floor(n / (3^k))
const customGapSequence2 = (n) => {
    const gaps = [];
    let k = 0; 
    let gap = Math.floor(n / Math.pow(3, k)); 

    while (gap > 1) { 
        gaps.push(gap);
        k++;
        gap = Math.floor(n / Math.pow(3, k)); 
    }

    gaps.push(1); 
    return gaps;
};

// gap = floor(gap / 1.5),  first gap = floor(n / 2)
const customGapSequence3 = (n) => {
    const gaps = [];
    let gap = Math.floor(n / 2); 

    while (gap > 1) {
        gaps.push(gap); 
        gap = Math.floor(gap / 1.5); 
    }

    gaps.push(1); 
    return gaps;
};

module.exports = { customGapSequence1, customGapSequence2, customGapSequence3 };
