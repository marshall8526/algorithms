const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random()*size));
};

module.exports = generateRandomArray