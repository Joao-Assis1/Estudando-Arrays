var Cinconumeros = []
var CincoInvertido = []

//Populando Array
for (var i = 0; i < 5; i++){
    var numeros = parseInt(prompt("Digite o " + (i + 1) + "° número"))
    Cinconumeros[i] = numeros
}
    console.log("Array original:" + Cinconumeros)

//Array invertido
var contador = 4
for (let i = 0; i < 5; i++){
    CincoInvertido[i] = Cinconumeros[contador]
    contador-- 
} 
    console.log("Array Invertido: " + CincoInvertido)