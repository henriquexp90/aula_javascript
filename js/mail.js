function voltar(elemento){
//    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function trocar(elemento){
//   document.getElementById("mousemove").innerHTML = "Obrigado";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function redirecionar(){
    window.open("http://www.uaitec.mg.gov.br");
}

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
}

/*
function validaIdade(idade){
    var validar; 
    if (idade >= 18){
    validar = true
}else{
    validar = false
}
return validar;
}; 
var idade = prompt("Qual é sua idade?");
document.write(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
return frase.replace(nome,novo_nome)
};
document.write(setReplace("Vai Alemanha", "Alemanha", "Brasil"));
*/

/*
//var n1 = prompt("Informe o primeiro numero");
//var n2 = prompt("Informe o segundo numero");
function soma(n1, n2){
return n1 + n2;
}
//var soma = parseInt(n1) + parseInt(n2); //calculadora de soma
document.write(soma(1, 5));
*/

/*
var d = new Date();
    document.write(d.getHours());
*/

/*
var count;
for(count=0; count <= 5; count++){
document.write(count);
};
*/

/*
var count = 0;
while(count <=10){
    document.write(count);
    count++;
};
*/

/*
var idade = prompt("Qual é a sua idade");
//var idade = 19;
if (idade >= 18){
    document.write("Maior de idade");
}else{
    document.write("Menor de idade");
};
*/

/*
var lista = ["maça", "pêra", "laranja"];
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" ; "));
*/

/*
var nome = "Henrique de Carvalho Vieira";
var n1 = 10;
var n2 = 5;
var frase = "Japão é o melhor time do mundo. ";
console.log(n1 * n2);
//console.log(frase.push("Teste"));
*/