const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome:'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome:'Paula',
    idade: 29,
    profissao: 'desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvesora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materiais: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvesora
}

const marta: Pessoa = {
    nome: 'Marta',
    idade: 40,
    profissao: Profissao.JogadoraDeFutebol
}

const monica: Estudante = {
    nome: 'Mônica',
    idade: 30,
    profissao: Profissao.Desenvolvesora,
    materiais: ['Portugues', 'Matemática', 'História']
}
function listar(lista: string[]) {
    for (const item of lista){
        console.log(' -', item);
    }
}

listar(monica.materiais);