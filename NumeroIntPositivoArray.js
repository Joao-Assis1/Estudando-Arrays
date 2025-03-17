//Criando Variáveis
var numeroIntPosi = parseInt(prompt("Digite um número inteiro e positivo"))
var fibonacci = []
fibonacci[0] = numeroIntPosi - 1
fibonacci[1] = numeroIntPosi

//Criando Loop
for (let i = 2; i < 10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
    console.log("Fibonacci: " + fibonacci)