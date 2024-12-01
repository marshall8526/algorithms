const originalGapSequence = (n) => {
    const gaps = [];
    let k = 1;
    let gap = Math.floor(n / 2); // Початковий крок

    while (gap > 0) { // Крок має бути більше нуля
        gaps.push(gap);
        k++;
        gap = Math.floor(n / Math.pow(2, k)); // Оновлюємо gap
    }

    return gaps;
};




module.exports = originalGapSequence;