//primeiro arquivo js - Bootcamp

// var x = 2;
// var y = 3;

// var preco = 2;
// var desconto = 0.2;
// preco = preco - desconto;

// const preco = 2;
// var desconto = 0.2;
// var total = preco - desconto;


// function soma (a, b) {
//     return a + b;
// }

// function subtracao (a , b) {
//     return a - b;
// }

// soma(5, 6);
// subtracao(5, 6);
// console.log(soma);
// console.log(subtracao);

function values(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
values(array);