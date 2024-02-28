var textA = document.getElementById('textA');
var textB = document.getElementById('textB');
var res = document.getElementById('res');


function validateNumbers(a, b){
    a = textA;
    b = textB;
    var somaAB = Number(a.value) + Number(b.value);

    res.innerHTML = "";


    if(a.value > 15 || b.value > 15){
        alert('[ATENÇÃO] Insira valores menores ou iguais que 15.');
        textA.value = "";
        textB.value = "";
        res.innerHTML = "";
    }
    else{
        if(a.value == b.value){
            res.innerHTML += `<p>Os valores ${a.value} e ${b.value} são iguais.</p>`;
            if(somaAB > 10)
                res.innerHTML += `<p>A soma dos valores ${a.value} e ${b.value} (${somaAB}) é maior que 10.</p>`;
            else
                res.innerHTML += `<p>A soma dos valores ${a.value} e ${b.value} (${somaAB}) é menor que 10.</p>`;
        }
        else{
            res.innerHTML += `<p>Os valores ${a.value} e ${b.value} não são iguais.</p>`;
            if(somaAB > 10)
                res.innerHTML += `<p>A soma dos valores ${a.value} e ${b.value} (${somaAB}) é maior que 10.</p>`;
            else
                res.innerHTML += `<p>A soma dos valores ${a.value} e ${b.value} (${somaAB}) é menor que 10.</p>`;
        }
    }
}

