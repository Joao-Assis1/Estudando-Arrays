var tamanho = parseInt(prompt("Informe o tamanho do array: "))
var array = []

for (var i = 0; i < tamanho; i++){
    var numero = parseInt(prompt("Insira o número da posição " + (i + 1) + ": "))
    array[i] = numero
}

//Eliminando posições com o valor zero
var arrayNovo = []
var contadorZero = 0

for (var i = 0; i < array.lenght; i++){
    if(array[i] != 0){
        arrayNovo[contadorZero] = array[i]
        contadorZero++
    }
}

//Exibindo o array atualizado
console.log("Array atualizado: " + arrayNovo)