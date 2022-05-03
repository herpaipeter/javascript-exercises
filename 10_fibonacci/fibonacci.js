const fibonacci = function(index) {
    if (index < 1) {
        return "OOPS";
    }
    let elements = [1, 1];
     if (index < 3) {
         return elements[index - 1];
     }
    for (let i = 2; i < index; ++i) {
        elements.push(elements[i-2]+elements[i-1]);
    }
    return elements.pop();
};

// Do not edit below this line
module.exports = fibonacci;
