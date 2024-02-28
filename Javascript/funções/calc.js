var num1 = 10;
var num2 = 50;

const calc = (operacao, num1, num2) => operacao(num1, num2);

const soma = (num1, num2) => num1 + num2;

const resultSoma = calc(soma, num1, num2);

console.log(resultSoma);



  