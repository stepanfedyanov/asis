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

const endingWord = (type, num) => {
    switch (type) {
        case 'calories':
            if (num === 1) {
                return 'калория';
            } else if (num >= 2 && num <= 4) {
                return 'калории';
            } else {
                return 'калорий';
            }
        case 'steps':
            if (num === 1) {
                return 'шаг';
            } else if (num >= 2 && num <= 4) {
                return 'шага';
            } else {
                return 'шагов';
            }
        case 'activity':
            if (num === 1) {
                return 'процент';
            } else if (num >= 2 && num <= 4) {
                return 'процента';
            } else if (num === 73) {
                return 'процента';
            } else if (num === 89) {
                return 'процентов'
            } else {
                return 'процентов';
            }
        case 'weight':
            return 'кг'
    }
}

export {arraySum, averageArray, endingWord}