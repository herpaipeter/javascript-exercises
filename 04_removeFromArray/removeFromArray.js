const removeFromArray = function(array, ...args) {
    for (let elem of args)
    {
        const ind = array.indexOf(elem);
        if (-1 < ind) {
            array.splice(ind, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
