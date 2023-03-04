const filterByAge = (el) => {
    return el.age < 50;
};

const filterByScore = (el) => {
    return el.score >= 75;
};

const filterByServiceRecord = (el) => {
    return el.serviceRecord >= 5;
};

const sortByScore = (arr) => {
    let arrSort = [...arr];
    return arrSort.sort(function (a, b) {
        return b.score - a.score;
    });
};

const getMeanAge = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i].age;
    }
    return sum / arr.length;
};

const getMeanAgeReduce = (arr) => {
    return arr.reduce(function (acc, el, index, array) {
        const sum = acc + el.age;
        if (index === array.length - 1) {
            return sum / array.length;
        }
        return sum;
    }, 0);
};

const getNamesOnly = (arr) => {
    return arr.name;
};

module.exports = {
    filterByAge,
    filterByScore,
    filterByServiceRecord,
    sortByScore,
    getMeanAge,
    getMeanAgeReduce,
    getNamesOnly,
};
