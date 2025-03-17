var idadeAlunos = []
var alturaAlunos = []
var somaAlturas = 0

//Preenchendo o array de idades e alturas
for (let i = 0; i < 10; i++){
    var idade = parseInt(prompt("Informe a idade do aluno " + (i + 1) + ": "))
    var altura = parseInt(prompt("Informe a altura do aluno " + (i + 1) + " (em metros): "))
    idadeAlunos[i] = idade
    alturaAlunos[i] = altura
    somaAlturas += altura
}

//Calculando a média da altura de todos os alunos
var mediaAltura = somaAlturas / alturaAlunos.length

//Verificando quantos alunos com mais de 13 anos têm altura menos que a média
var contador = 0
for (var i = 0; i < 10; i++){
    if (idadeAlunos[i] > 13 && alturaAlunos[i] < mediaAltura){
        contador++
    }
}
    console.log("Quantidade de alunos com mais de 13 anos e altura menor que a média: ", contador)