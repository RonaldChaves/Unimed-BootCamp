"use strict";
let anyValor;
anyValor = 5;
anyValor = "oi";
let stringTest = 'verificar';
stringTest = anyValor; // tudo "certo"
let unknownValor;
unknownValor = 5;
unknownValor = 'vai dar';
let stringTest2 = 'agora vai meu irmão';
// stringTest2 = unknownValor; // erro por ser unknown e não ser string;
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor; // agora se tornou string;
}
function jogaErro(erro, code) {
    throw { erro: "deu erro", code: 404 };
}
