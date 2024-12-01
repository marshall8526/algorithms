function customGapSequence1(n) {
    const gaps = [];
    let k = 1;
    let gap = n; // Початкове значення для gap
    while (gap > 1) {
        gap = Math.floor(n / (2 ** k)) - k; // Обчислюємо gap
        if (gap > 1) gaps.push(gap); // Додаємо gap, якщо він більше 1
        k++;
    }
    gaps.push(1); // Завжди додаємо 1 в кінці
    return gaps;
}


const customGapSequence2 = (n) => {
    const gaps = [];
    let k = 0; // Початковий індекс
    let gap = Math.floor(n / Math.pow(3, k)); // Початковий крок

    while (gap > 1) { // Продовжуємо, доки gap > 1
        gaps.push(gap);
        k++;
        gap = Math.floor(n / Math.pow(3, k)); // Оновлюємо gap
    }

    gaps.push(1); // Завжди додаємо 1
    return gaps;
};



const customGapSequence3 = (n) => {
    const gaps = [];
    let gap = Math.floor(n / 2); // Початковий gap

    while (gap > 1) {
        gaps.push(gap); // Додаємо поточний gap до послідовності
        gap = Math.floor(gap / 1.5); // Зменшуємо gap у 1.5 рази
    }

    gaps.push(1); // Завжди додаємо 1
    return gaps;
};


module.exports = {customGapSequence1, customGapSequence2, customGapSequence3}