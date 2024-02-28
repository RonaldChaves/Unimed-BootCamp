import $ from  'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função')
    }
})

// omit

interface IPessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<IPessoa, 'nacionalidade'>{

}

const pessoa: Brasileiro = {
    idade: 20,
    nome: 'Ana',
    
}