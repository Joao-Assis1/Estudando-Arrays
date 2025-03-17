//Criando Variaveis
var array = []
var indicesEncontrados = []

//Populando Array
for (let i = 0; i < 10; i++){
    var numero = parseInt(prompt("Digite o " + (i + 1) + "° número"))
    array[i] = numero
}

//Procurando Número
var numeroProcurado = parseInt(prompt("Digite o número que deseja procurar no array"))
var contador = 0

for (let i = 0; i < array.length; i++){
    if (array[i] == numeroProcurado){
        indicesEncontrados[contador] = i
        contador++
    }
}
    console.log("O número inserido aparece nos índices: " + indicesEncontrados)