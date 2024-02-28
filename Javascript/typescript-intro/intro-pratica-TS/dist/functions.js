"use strict";
function somarAValores(num1, num2) {
    return num1 + num2;
}
function subtrairValores(num1, num2) {
    return num1 - num2;
}
function valores(num1, num2) {
    console.log(num1 - num2);
}
function numerosATratar(num1, num2, callback) {
    let result = num1 + num2;
    return callback(result);
}
function aoQuadrado(num) {
    return num * num;
}
function divBySelf(num) {
    let result = num / num;
    return `Todo Número dividido por ele mesmo é 1.
    Número: ${num};
    Resultado: ${result}`;
}
console.log(numerosATratar(1, 3, aoQuadrado)); // retorna NUMBER 
console.log(numerosATratar(1, 3, divBySelf)); // retorna STRING
console.log(somarAValores(23, 60)); // retorna NUMBER
console.log(subtrairValores(100, 60)); //retorna NUMBER
console.log(valores(100, 60)); //retorna "VOID"
