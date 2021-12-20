/*
// let array = ['script', 1, true];
// console.log(array);

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], 6.8];
console.log(array[2]);

array.forEach(function (item, index) {
    console.log(item, index);
})
// adiciona item no fim
array.push('novo item no fim');
console.log(array);
// remove item do fim
array.pop('novo item no fim');
console.log(array);
// adiciona item no inicio
array.unshift('novo item no inicio');
console.log(array);
// remove item do inicio
array.shift('novo item no inicio');
console.log(array);
// retornando indice do item
console.log(array.indexOf(1));
// remove ou substitui o item por indice
array.splice(0, 2);
console.log(array);
//retorna parte do array
let newArray = array.slice(1,3);
console.log(newArray); */

function calculadora() {
    
    const OPERACAO = Number(prompt('## MENU ##\n1 - SOMA\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n4 - DIVISÃO\n'));
    if (OPERACAO < 1 || OPERACAO > 4) {
        alert('Opção Inválida!!');
        calculadora();
    }

    else {
        var num1 = Number(prompt('Entre com o primeiro valor: '));
        var num2 = Number(prompt('Entre com o segundo valor: '));
        var result = 0;

        if (!num1 || !num2) alert('Valores Inválidos!!'); calculadora();

        function sum(x = num1, y = num2) {
            result = x + y;
            console.log(result);
            repete();
        }

        function sub(x = num1, y = num2) {
            result = x - y;
            console.log(result);
            repete();
        }

        function mult(x = num1, y = num2) {
            result = x * y;
            console.log(result);
            repete();
        }

        function div(x = num1, y = num2) {
            result = x / y;
            console.log(result);
            repete();
        }

        function repete() {
            let aux = prompt('Deseja realizar uma nova operação?\n1 - SIM\n2 - NÃO');

            (aux == 1) ? calculadora() : alert('Encerrando...');
        }
    }
    
    switch (OPERACAO) {
        case 1 : sum(); break;
        case 2 : sub(); break;
        case 3 : mult(); break;
        case 4 : div(); break;
    }
}

calculadora();