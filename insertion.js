const insertion = (arr, gap = 1) => {
    for (let i = gap; i < arr.length; i++) {

        let current = arr[i];

        let k = i - gap;
        while (k >= 0 && arr[k] > current) {
            arr[k + gap] = arr[k];
            k -= gap;
        }
        
        arr[k + gap] = current;
    }
};


module.exports = insertion