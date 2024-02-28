"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
};
const paula = {
    nome: 'Paula',
    idade: 29,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvesora"] = 2] = "Desenvolvesora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvesora
};
const marta = {
    nome: 'Marta',
    idade: 40,
    profissao: Profissao.JogadoraDeFutebol
};
const monica = {
    nome: 'Mônica',
    idade: 30,
    profissao: Profissao.Desenvolvesora,
    materiais: ['Portugues', 'Matemática', 'História']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' -', item);
    }
}
listar(monica.materiais);
