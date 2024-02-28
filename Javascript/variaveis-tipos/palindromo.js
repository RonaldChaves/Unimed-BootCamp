function verifyPalindromo(string){
    if(!string) return 'String inexistente';

    return string.split("").reverse().join("") === string;
}

// console.log(verifyPalindromo("subinoonibus"));

function verifyPalindromo2(string){
    if(!string) return 'String inexistente';

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i])
            return false;
    }

    return true;
}

// console.log(verifyPalindromo2("abaab"));
function trocaPar(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Zero");
        }
        else if(array[i] % 2 === 0) 
            array[i] = 0;
    }
    return array;
}

let array = [1, 34, 8, 53, 76, 89] 
// console.log(trocaPar(array));



const meuObjeto = {
    chave: "valor"
};
   
   console.log(meuObjeto.chave); 

   meuObjeto.split()