"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
function somarAoSaldo(soma) {
    let somado;
    somado = Number(campoSaldo.innerHTML += soma);
    if (typeof somado === 'number') {
        return somado;
    }
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    let result = Number(campoSaldo.innerHTML) + Number(soma.value);
    somarAoSaldo(result);
    campoSaldo.innerHTML = result.toString();
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/*
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
