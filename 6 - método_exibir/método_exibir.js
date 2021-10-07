// Imagina que vc receba esses dados do banco de dados em nomes, e suponhamos que vc receba
// apenas as id de uma tabela qq de um db, porém essas ids tem um valor, mas não está na tabela
// que vem pra vc, mas existe outra tabela com essas ids e os nomes de quem pertence essa id
// então vc teria que fazer uma chamada ou requisião ao banco para obter os dados completos
// com a id e os nomes pertecentes 

/** Esse tipo de situação geralmente aconte pra quando vc tem uma tabela recebendo essas id
 * e não quer exibir id e sim o valor dela contido em outro local, deveria estar a id e o valor dela
 * juntos mas em um projeto real e muito grande isso acontece constantemente
 */

// Suponhamoes que isso seja o retorno de uma requisição que foi feita apenas para pegar os nomes com as id correta
// pois vc atualmente só recebe as IDs do usuário de uma outra requisição mas lembrese que cada id tem um valor que nesse
// caso é um nome
var nomes = [
    {
        nome: 'wilhmas',
        id: 23
    },
    {
        nome: 'Meira',
        id: 22
    },
    {
        nome: 'Júnior',
        id: 21
    }
]

var getLoginArrecadador = function (id) {

    // filter me retorna os valores que passaram na condição, ou seja se existir id iguais aonde 
    // procuro o filter me retornará quantas tiver
    var nome = nomes.filter(function (el) {
        // return el.id == id --> esse return que está abaixo funciona como um if, ele pergunta: Exite essa id dentro da var nomes? se existir
        // ele retorna as existentes, o resulta dessa expressão fica armazenada na var nome acima

        // Com o uso de um if ficaria assim:

        // if (el.id == id) { Verifica se são iguais
        //     return id; e aqui retorna as iguais, tanto faz se vc retorna id ou el.id, ele irá retornar o que
        //                que ele percorreu da vez e dará o mesmo resultado
        //   }

        return el.id == id
    })

    // !nome.length ? '---'  ---> Primeiro verifico se existe pra não gerar erro no console, se for falso que é o exclamção
    // antes da var ele irá apresentar '---' que siginifca que não existe nome algum
    // nome[0].nome  --> se for true ou existir eu retorno nome[na posição 0, pq? pq cada elemento interado pelo filter ele coloca
    // como sendo posição 0 que é a atual, então colocamos 0 para que ele possa entender que o ínidce atual é o 0].nome , esse
    // ponto nome siginifca acessar o nome através do ponto
    // então isso me retornará o nome da id que me foi passada do resultado de filter
    return !nome.length ? '---' : nome[0].nome
}

// Armazenado em uma var e passando número 22 como parãmetro
var buscaNome = getLoginArrecadador(22)

console.log('buscaNome', buscaNome)
// output buscaNome Meira

console.log('getLoginArrecadador com parâmetro 21', getLoginArrecadador(21))
// output Júnior

console.log('getLoginArrecadador sem parametro', getLoginArrecadador())
// output '---'