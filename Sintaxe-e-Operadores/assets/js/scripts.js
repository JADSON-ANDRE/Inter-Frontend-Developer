var num1 = Number(prompt("Insira o primeiro valor: "));
var num2 = Number (prompt("Insira o segundo valor: "));
var sum = num1 + num2;

function compare(x = num1, y = num2) {
    (num1 == num2)  ?
        console.log("Os números " +num1+ " e " +num2+ " são iguais.") :
        console.log("Os números " +num1+ " e " +num2+ " NÃO são iguais.");
    
    (sum >= 10) ?
        console.log("A soma destes é " +sum+ ", que é maior/igual que 10,") : 
        console.log("A soma destes é " +sum+ ", que NÃO é maior/igual que 10,");

    (sum <= 20) ?
        console.log("e é menor/igual que 20") :
        console.log("e NÃO é menor/igual que 20");
}

console.log(compare());