const fs = require('fs');

const files = [
    'resultForOriginal.txt',
    'resultForHibbard.txt',
    'resultsForMyOwn1.txt',
    'resultsForMyOwn2.txt',
    'resultsForMyOwn3.txt',
    'resultForInsertSort.txt'
];

const clear = () => {
    files.forEach(file => {
        try {
            fs.writeFileSync(file, ''); // Очищаємо файл
            console.log(`${file} has been cleared.`);
        } catch (err) {
            console.error(`Error clearing file ${file}:`, err);
        }
    });
};

module.exports = clear;
