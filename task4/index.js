function sumOfIntegers(inputArray) {
    return inputArray.map(el => (parseFloat(el) === parseInt(el)) && !isNaN(parseInt(el))
        ? parseInt(el)
        : 0
    ).reduce((acc, el) => acc + el, 0);
};
