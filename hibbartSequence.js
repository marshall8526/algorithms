const hibbardGapSequence = (n) => {
    const gaps = [];
    let k = 1;
    let gap = Math.pow(2, k) - 1;
    while (gap < n) {
        gaps.unshift(gap);
        k++;
        gap = Math.pow(2, k) - 1;
    }
    return gaps;
};


module.exports = hibbardGapSequence;