var modeloCarro = []
var anoCarro = []
var valorCarro = []

var cadastroCarros = 0
var continuar = true
//Loop para cadastrar novos carros
while(continuar){
    var modelo = prompt("Informe o modelo do seu carro")
    modeloCarro[cadastroCarros] = modelo
    var ano = prompt("Digite o ano do seu carro")
    anoCarro[cadastroCarros] = ano
    var valor = prompt("Qual o valor do seu carro?")
    valorCarro[cadastroCarros] = valor
    cadastroCarros++

    var pararDeInserir = prompt("Insira 1 para parar")
    if(pararDeInserir == 1){
        continuar = false
    }
    //Exibir nome, ano e valor dos carros inseridos
    console.log("Carros Cadastrados")
    for (var i = 0; i < modeloCarro.length; i++){
        console.log(modeloCarro[i] + "," + anoCarro[i] + " Valor: " + valorCarro[i] + "")
    }
    
}
//Ordenar os vetores pelo preço dos carros
for (var i = 0; i < valorCarro.length - 1; i++){
    for (var j = 0; j< valorCarro.length - 1; j++){
        if (valorCarro[j] > valorCarro[j + 1]){

            //Trocar a posição dos elementos nos três arrays
            var maiorValor = valorCarro[j]
            valorCarro[j] = valorCarro[j + 1]
            valorCarro[j + 1] = maiorValor

            var modeloMaiorValor = modeloCarro[j]
            modeloCarro[j] = modeloCarro[j + 1]
            modeloCarro[j + 1] = modeloMaiorValor

            var anoMaiorValor = anoCarro[j]
            anoCarro[j] = anoCarro[j + 1]
            anoCarro[j + 1] = anoMaiorValor
        }
    }
    //Exibir nome, ano e valor dos carros ordenados pelo preço
    console.log("Carros ordenados pelo preço:")
    for (var i = 0; i < modeloCarro.length; i++){
        console.log(modeloCarro[i] + "," + anoCarro[i] + " Valor: " + valorCarro[i] + "")
    }
}