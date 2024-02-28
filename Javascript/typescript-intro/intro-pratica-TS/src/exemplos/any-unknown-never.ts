let anyValor: any;
anyValor = 5;
anyValor = "oi";

let stringTest: string = 'verificar';
stringTest = anyValor; // tudo "certo"

let unknownValor: unknown;
unknownValor = 5;
unknownValor = 'vai dar';

let stringTest2: string = 'agora vai meu irmão';
// stringTest2 = unknownValor; // erro por ser unknown e não ser string;

if(typeof unknownValor === 'string'){
    stringTest2 = unknownValor; // agora se tornou string;
}

function jogaErro(erro: string, code: number): never{
    throw {erro: "deu erro", code: 404}
}
