const sumAll = function(start, end) {
    if (typeof(start) !== 'number' || typeof(end) !== 'number'
        || start < 0 || end < 0) {
        return 'ERROR'
    }
    let sum = 0;
    let from = start < end ? start : end;
    let to = start < end ? end : start;
    for (let i = from; i <= to; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
