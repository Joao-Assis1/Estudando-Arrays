//Exercicio 1
var nomes =[]
var contadorNomes = 0
var continuar = true

while(continuar){
    var nomesInseridos = prompt("Digite um nome")
    nomes[contadorNomes] = nomesInseridos
    contadorNomes++
    var desejacontinuar = prompt("Digite 1 para parar")
    if(desejacontinuar == 1){
        continuar = false
    }
    console.log(nomes)
}

var senhas =[]
var contadorSenhas = 0
var continuar = true

while(continuar){
    var senhasInseridas = prompt("Digite uma senha")
    senhas[contadorSenhas] = senhasInseridas
    contadorSenhas++
    var desejacontinuar = prompt("Digite 1 para parar")
    if(desejacontinuar == 1){
        continuar = false
    }
    console.log(senhas)
}