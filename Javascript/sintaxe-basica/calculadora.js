function calculator(){
    const operator = Number(prompt("Escolha um operador:\n 1- soma\n 2-Subtração \n 3-multiplicação \n 4-Divisão \n 5-Exponenciação \n 6-Divisão Inteira"));

    if(!operator || operator > 6){
        alert("Não é possivel calcular!!");
    }else{
        var num1 = prompt("Insira valor um:");
        var num2 = prompt("Insira valor dois:");
        var result;

        if(operator == 1)
            soma();
        else if(operator == 2)
            sub();
        else if(operator == 3)
            mult();
        else if(operator == 4)
            div();
        else if(operator == 5)
            exp();
        else
            divIn();
        
        function soma(){
            result = Number(num1) + Number(num2);
            alert(`O resultado da soma entre ${num1} e ${num2} é: ${result}`);
        }
        function sub(){
            result = Number(num1) - Number(num2);
            alert(`O resultado da subtração entre ${num1} e ${num2} é: ${result}`);
        }
        function mult(){
            result = Number(num1) * Number(num2);
            alert(`O resultado da multiplicação entre ${num1} e ${num2} é: ${result}`);
        }
        function div(){
            result = Number(num1) / Number(num2);
            alert(`O resultado da divisão entre ${num1} e ${num2} é: ${result}`);
        }
        function exp(){
            result = Number(num1) ** Number(num2);
            alert(`O resultado da exponenciação entre ${num1} e ${num2} é: ${result}`);
        }
        function divIn(){
            result = Number(num1) % Number(num2);
            alert(`O resultado da divisão inteira entre ${num1} e ${num2} é: ${result}`);
        }
    }
}

function gerar(){
   calculator(); 
}
calculator(); 
