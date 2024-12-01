const insertion = require('./insertion')

const shellSort = (arr, gapSequence) => {
    for (const gap of gapSequence) {
        insertion(arr, gap); 
    }
};

module.exports = shellSort
