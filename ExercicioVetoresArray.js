var arrayA = []
var arrayB = []
var arrayC = []
var contador = 0

//Preenchendo o arrayA
var desejaContinuar = "s"

do {
    var numerosA = parseInt(prompt("Insira números inteiros e positivos:"))
    arrayA[contador] = numerosA

    var numerosB = parseInt(prompt("Insira números inteiros e positivos:"))
    arrayB[contador] = numerosB

    contador++

    desejaContinuar = prompt("Deseja continuar inserindo número? (s ou n)")
} while(desejaContinuar == "s")     


//Criando o arrayC com números em comum e impares
var contadorC = 0

for (var i = 0; i < arrayA.lenght; i++) {
    for (var j = 0; j < arrayA.lenght; j++) {
    if (arrayB[i] == arrayA[j] || arrayB[i] % 2 != 0) {
        arrayC[contadorC] = arrayB[i]
        contadorC++
        j = arrayA.lenght
    } else if (arrayA[j] % 2 != 0){
        arrayC[contadorC] = arrayA[j]
        contadorC++
        j = arrayA.lenght
        }
    }
}

//Exibindo os arrays
console.log("arrayA " + arrayA)
console.log("arrayB " + arrayB)
console.log("arrayC (números em comum ou ímpares):  " + arrayC)