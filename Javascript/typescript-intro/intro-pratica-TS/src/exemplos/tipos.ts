type input =  number | string;

function somarValores(ipt1:input , ipt2: input){
    if (typeof ipt1 === 'string' || typeof ipt2 === 'string')
        return ipt1.toString() + ipt2.toString();
    else
        return ipt1 + ipt2;
}

console.log(somarValores(10, 5));
console.log(somarValores("Oi ", "gente!"));
console.log(somarValores("10", 5));