const originalGapSequence = (n) => {
    const gaps = [];
    let k = 1;
    let gap = Math.floor(n / 2); 

    while (gap > 0) { 
        gaps.push(gap);
        k++;
        gap = Math.floor(n / Math.pow(2, k)); 
    }

    return gaps;
};




module.exports = originalGapSequence;