function swap(array) {
    if(array.lenght == '') return console.log('-1 Array Vazio');
    console.log('Array de entrada: ' + array);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] !== 0) {
            console.log('Trocando ' + array[i] + ' por 0.');
            array[i] = 0;
        }
    }
    console.log('Array de saída: ' + array);
}
var array = [3, 1, 4, 6, 7, 8, 2, 9, 0];
swap(array);