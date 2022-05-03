const palindromes = function (text) {
    const forward = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '').toLowerCase();
    const backward = forward.split('').reverse().join('');
    return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
