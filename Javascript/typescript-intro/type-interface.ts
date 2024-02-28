// // Types

// type IDomestico = IFelino | ICanino;

// // Interface

// interface IAnimal {
//     nome: string;
//     tipo: 'Terrestre' | 'Aquático';
//     domestico: boolean | 'Talvez';
// }

// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'medio' | 'grande';
// }


// const animal : IAnimal = {
//     nome: 'Elefante',
//     tipo: "Terrestre",
//     domestico: false,
// }

// const felino : IFelino = {
//     nome: 'Leão',
//     tipo: "Terrestre",
//     visaoNoturna: true,
//     domestico: false,
// } 

// const aniimal : IDomestico = {
//     nome: 'peixe',
//     porte: 'pequeno',
//     tipo: "Aquático",
//     visaoNoturna: false,
//     domestico: "Talvez",
// } 

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) =>{
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);

// })

// Generic types

// function adiconarApendiceALista<T>(array: any[], valor: T) {
//     return array.map(item => item + valor);
// }
// adiconarApendiceALista([1, 2, 3], 4)


// // Condicionais a partir de parametros

// interface IUsuario {
//     id: string;
//     email: string;
//     cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
// }

// function redirecione(usuario: IUsuario){
//     if(usuario.cargo){
//         //redirecionar para a área de administração
//     }

//     //redirecionar para a área de usuário
// }

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLEitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements Cachorro{
    idade;
    nome;
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Pitoco', 9)

