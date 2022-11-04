const arraySum = (array) => {
    if (array.length > 0) {
        return array.reduce((partialSum, a) => partialSum + a, 0);
    } else {
        console.error('Empty array');
    }
};

const averageArray = (array) => {
    if (array.length > 0) {
        const sum = arraySum(array);
        return Math.round(sum / array.length)
    } else {
        console.error('Empty error');
    }
};

export {arraySum, averageArray}