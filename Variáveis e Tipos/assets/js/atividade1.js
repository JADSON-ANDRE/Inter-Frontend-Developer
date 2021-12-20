var word = String(prompt('Digite a string: '));

// function palindromo(string = word) {
//     if (!string) return "valor inválido";
//     console.log(string);
//     console.log(string.reverse(string));
//     return string.split("").reverse().join("") === string;
// }
// palindromo();

function palindromo2(string = word) {
    if (!string) return "valor inválido";
    console.log(string);

    for (let i = 0; i < string.length/2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindromo2());