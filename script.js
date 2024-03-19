var botao = document.getElementById("botao");
botao.addEventListener("click",alertar,false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

function alertar(event){
    //alert("voce clicou no botao!!!" + nome.value);

    saida.innerText = "nome:"+nome.value+
    "\n Email: " + email.value;
   
}