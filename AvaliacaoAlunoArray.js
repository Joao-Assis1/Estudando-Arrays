var alunos = []
var notaAlunos = []

var continuar = true
var contador = 0

//Loop para inserir informações sobre os alunos
while (continuar) {
    var nome = prompt("Digite o nome do aluno:")
    var nota = parseFloat(prompt("Digite a nota da prova do aluno:"))

    alunos[contador] = nome
    notaAlunos[contador] = nota
    contador++

    var resposta = prompt("Deseja inserir informações sobre outro aluno? (Digite 's' ou 'n') ")

    if (resposta == 'n') {
        continuar = false
    }
}

console.log("Nota dos alunos:")

//Exibindo a nota de cada aluno
for (var i = 0; i < alunos.length; i++){
    console.log(alunos[i] + ": " + notaAlunos[i])
}

//Calcular a soma das notas
var somaNotas = 0
for (var j = 0; j < notaAlunos.length; j++){
    somaNotas += notaAlunos[j]
    }

//Calcular a média geral da turma
var mediaGeral = somaNotas / alunos.length

console.log("Soma das notas " + somaNotas)
console.log("Média geral da turma: " + mediaGeral)