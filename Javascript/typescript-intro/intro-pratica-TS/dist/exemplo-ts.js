"use strict";
let btn = document.getElementById('button');
let ipt1 = document.getElementById('text1');
let ipt2 = document.getElementById('text2');
function adcionarNumero(num1, num2, devePrintar, frase) {
    let resultado = num1 + num2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
let devePrintar = true;
let frase = 'O valor é: ';
if (btn) {
    btn.addEventListener('click', () => {
        if (ipt1 && ipt2) {
            console.log(adcionarNumero(Number(ipt1.value), Number(ipt2.value), devePrintar, frase));
        }
    });
}
