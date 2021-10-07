// **** Inserindo uma inforamção de outro array em outro array, para isso ambos tem que ter um dado em comun, uma id outra particularidade ****

$scope.loginArrecadador.forEach(function (e) {  // array que tem o dado q vai ser inserido em $scope.acertos

    $scope.acertos.forEach(function (acerto, i) { // i pega automaticamente o index exato a ser inserido 

        if (e.id == acerto.id_usuario_arrecadador) { // se houver id igual

            $scope.acertos[i].login = e.login // adiciona em $scope.acertos na posição [i] uma informação chamada login com .login, ficando dessa forma "$scope.acertos[i].login" em seguida damos um valor que é o e.login

        }
    });

})



//  **** Fazendo a mesma coisa só que com filter ****


$scope.getLoginArrecadador = function (id) {

    var nomelogin = $scope.loginArrecadador.filter(function (login) {

        return login.id == id // esse return é equivalente a um if, ele pergunta se existe login.id == id e se houver ele retorna todos q encontrar, sendo atribuido os valores encontrados em nomelogin

    })

    return !nomelogin.length ? '---' : nomelogin[0].login // houve a necessidade de um if ternaŕio pq em algum momento nomelogin vem undefined e quebrava a aplicação, esse return retornará os login encontrado na var nomelogin, nomelogin[0].login -> tem q dizer qual a posição e a posição é [0] pq namelogin sempre vem em um array diferente sendo todos com índice 0 e .login é o item q desejo pegar do array 

}

// Caso precise usar isso pra pra exibir o login, terá q passar a id como parâmetro na view dessa forma: "getLoginArrecadador(acerto.id_usuario_arrecadador)", isso se torna um método o retorno disso para view será o segundo return, sendo esse: "return !nomelogin.length ? '---' : nomelogin[0].login", irá retornar os logins