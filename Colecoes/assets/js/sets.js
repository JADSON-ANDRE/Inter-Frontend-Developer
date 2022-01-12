function uniArray(array) {
    let uni = new Set(array);
    return[...uni];
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniArray(array));