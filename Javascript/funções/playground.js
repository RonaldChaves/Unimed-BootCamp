// const alunos = [{
//     nome:'João',
//     nota: 5,
//     turma: '1B',
// },
// {
//     nome: 'Sofia',
//     nota: 9,
//     turma: '1B',
// },
// {
//     nome: 'Paulo',
//     nota: 6,
//     turma: '2C',
// },
// ];


// function alunosAprovados(array, media){
//     let aprovados = [];

//     for(let i = 0; i < array.length; i++){
//         const {nota, nome } = array[i];

//         if(nota >= media){
//             aprovados.push(nome)
//         }
//     }

//     return aprovados;
// }

// console.log(alunosAprovados(alunos, 8))

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}
const pessoa1 = {
    nome: "Maria",
    idade:30
}

const pessoa2 = {
    nome: "Carla",
    idade: 26
}

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "pug",
}

console.log(calculaIdade.apply(animal, [3]))