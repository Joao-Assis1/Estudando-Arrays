var array = []
var arrayPar = []
var arrayImpar = []

//Preenchendo o array de números
for (let i = 0; i < 10; i++){
    var numerosInt = parseInt(prompt("Insira o " + (i + 1) + " inteiro "))
    array[i] = numerosInt
}

//Separando os números pares e impares
var contadorPar = 0
var contadorImpar = 0

for (var i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
        arrayPar[contadorPar] = array[i]
        contadorPar++
    } else {
        arrayImpar[contadorImpar] = array[i]
        contadorImpar++
    }
}
    console.log("Números informado: " + array)
    console.log("Números pares: " + arrayPar)
    console.log("Números impares: " + arrayImpar)