var array = []

for (let i = 0; i < 5; i++){
    var numeros = parseInt(prompt("Digite 5 números (negativos ou positivos) " + (i + 1) + "/5"))
    array[i] = numeros
}

//Substituindo os valores positivos por "true" e os valores negativos por "false"
for (let i = 0; i < array.length; i++){
    if (array[i] >= 0){
        array[i] = true
    } else {
        array[i] = false
    }
}

//Exibindo o array atualizado
console.log(array)

//Solicitando ao usuario que digite 5 números
var arrayDois = []

for (let j = 0; j < 5; j++){
    var numeroInserido = parseInt(prompt("Digite 5 números " + (j + 1) + "/5"))

//Verificando se o número já foi inserido
for (let z = 0; z < arrayDois.length; z++){
    if (arrayDois[z] == numeroInserido){
        alert("Número já inserido, digite outro número")
        numeroInserido = parseInt(prompt("Digite o número" + (i + 1) + ": "))
        z = 0
    } 
    
    }
    arrayDois[j] = numeroInserido 
}

//Exibindo o array com os números inseridos
console.log(arrayDois)