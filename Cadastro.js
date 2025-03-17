var nomes = []
var senhas = []
var contadorNomeseSenha = 0

nomes[contadorNomeseSenha] = prompt("Cadastre seu nome?")
senhas[contadorNomeseSenha] = prompt("Cadastre sua senha")
contadorNomeseSenha++

var opcao = prompt("escolha uma opção: 1 - cadastro; 2 - login; 3 - encerrar")
switch (opcao) {
    case "1":
        nomes[contadorNomeseSenha] = prompt("Insira um nome")
        senhas[contadorNomeseSenha] = prompt("Insira uma senha")
        contadorNomeseSenha++
        break;

    case "2":
        var nomeLogin = prompt("insira seu nome")
        var senhaLogin = prompt("insira sua senha")
        for (var i = 0; i < nomes.length; i++) {
            if (nomeLogin == nomes[i]){
            if (senhaLogin == senhas[i]){
            console.log("login feito com sucesso")
            i = nomes.lenght
            }
        } else if (i == nomes.length - 1) {
            console.log("nome ou senha incorretos")
        }       
}    
break;

    case "3":
        var nomeSup = []
        var senhaSup = []
        var contadorSup = 0
        var nomeExcluir = prompt("insira o nome que deseja excluir")

        for (var i = 0; i < nomes.length; i++) {
            if (nomeExcluir == nomes[i]) {
                console.log("usuario excluido")
            } else {
                nomeSup[contadorSup] = nomes[i]
                senhaSup[contadorSup] = senhas[i]
                contadorSup++
            }
        }
        nomes = nomeSup
        senhas = senhaSup
        break;

        default:
            continuar = false
            break;
    }

