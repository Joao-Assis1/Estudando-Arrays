arrayA = []
arrayB = []
arrayC = []

//Preenchendo os arrays arrayA e arrayB com 10 elementos cada 
for (let i = 0; i < 10; i++){
var numeroA = parseInt(prompt("Informe um número para o arrayA (" + (i + 1) +  "/10): "))
var numeroB = parseInt(prompt("Informe um número para o arrayB (" + (i + 1) +  "/10): "))
arrayA[i] = numeroA
arrayB[i] = numeroB
}

//Verificando os números que estão nos dois primeiros arrays e são maiores que 5
var contador = 0
for (var i = 0; i < arrayA.lenght; i++){
    for (var j = 0; j < arrayB.lenght; j++){
        if (arrayB[j] == arrayA[i] && arrayA[i] > 5 ) {
            arrayC[contador] = arrayA[i]
            contador++
        }
    }
}

//Exibindo o arrayC
console.log("Números presentes nos arrays arrayA e arrayB, maiores que 5:")
console.log(arrayC)