//  Adicionando um novo item dentro de um array, sem a necessidade de usar o findIndex para achar o índice
// pois o forEach te dá isso de graça, o segundo parãmetro do forEach é o index do elemento q ele tá percorrendo
// No código abaixo no if eu quero achar algo em comun entres dois arrays diferente e adicionar uma nova informação 
// no array que foi mandado inserir  a nova informação, no caso quem vai receber a nova informação
// é o response, então usamos o index dele
// response[index].ordem_exibica -> essa sintaxe permite adicionar uma nova chave em um array e o valor dela é
// eventoConfigurado.ordem_exibicao
response.forEach(function (evento, index) {
    eventosConfigurados.forEach(function (eventoConfigurado) {
        if (eventoConfigurado.id_evento == evento.id) {
            response[index].ordem_exibicao = eventoConfigurado.ordem_exibicao
        }
    })
})


// esse código abaixo não foi eu que fiz, mas parece ser bem interassante
$scope.eventos = response.filter(function (evento, index) {
    return !eventosConfigurados.some(function (eventoConfigurado) {
        return eventoConfigurado.id_evento == evento.id;
        // if (eventoConfigurado.id_evento == evento.id) {
        // response[index].ordem_exibicao = eventoConfigurado.ordem_exibicao
        // }
    })
});