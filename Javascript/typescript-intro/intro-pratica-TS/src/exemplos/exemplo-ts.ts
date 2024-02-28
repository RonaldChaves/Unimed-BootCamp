let btn = document.getElementById('button');
let ipt1 = document.getElementById('text1') as HTMLInputElement;
let ipt2 = document.getElementById('text2') as HTMLInputElement;

function adcionarNumero(num1: number, num2: number, devePrintar: boolean, frase: string){
    let resultado = num1 + num2;
    
    if(devePrintar){
        console.log(frase + resultado);
    }
    return num1 + num2;
}

let devePrintar = true;
let frase = 'O valor é: ';

if(btn){
    btn.addEventListener('click', () => {
        if(ipt1 && ipt2){
            console.log(adcionarNumero(Number(ipt1.value), Number(ipt2.value) ,devePrintar, frase));
        }
    })
}
