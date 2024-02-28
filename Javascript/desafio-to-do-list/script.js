var text = document.getElementById("text");
var outPut = document.getElementById("res");

function addToList(){
    outPut.innerHTML += `<p><input type="checkbox">  ${text.value}</p>`;
    text.value = "";
}
