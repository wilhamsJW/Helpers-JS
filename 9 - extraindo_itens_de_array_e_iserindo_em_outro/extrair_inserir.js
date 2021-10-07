// Imagine que vc receba o array id_usuario e quer retirar dele apenas as ids, ou os nomes ou as idades
// e inserir em um novo array, vamos fazer isso de foma bem simples:

// Com uma única validação podemos fazer várias coisas mas vamos analisar primeiro uma delas
// Essa validação: filtroIdWeb.indexOf(el.nome) === -1  --> 
// Todos nós sabemos que o indexOf retorna '- 1' quando não encontra o valor procurado
// então '- 1' é o false do indexOf ou seja ele não econtrou o procurado, e quem é o procurado?
// o procurado em questão é o el.nome, ou seja estou procurando el.nome dentro de 'filtroIdWeb'
// será que vai existir? Não né, pq 'filtroIdWeb' é um array vazio
// então se não existir eu adiciono com o push abaixo
// essa validação é muito poderosa pq ela não só adiciona como também impede que 
// itens repetidos sejam inseridos no meu array

var filtroIdWeb = []

var id_usuario = [{
    nome: 'Wilhams',
    idade: 27,
    id: 11
},
{
    nome: 'Meira',
    idade: 26,
    id: 12
},
{
    nome: 'Júnior',
    idade: 25,
    id: 13
},
//   Item repetido abaixo                
{
    nome: 'Júnior',
    idade: 25,
    id: 13
}
]


id_usuario.forEach(function (el) {

    if (filtroIdWeb.indexOf(el.nome) === -1) {

        // Tbm posso inserir mais de um item nesse array: filtroIdWeb.push(el.nome, el.idade, el.id)
        // mas para isso seria necessário tbm validar mais de um item acima no indexOf dessa forma:
        // if (filtroIdWeb.indexOf(el.nome, el.idade, el.id) === -1)
        filtroIdWeb.push(el.nome)
    }
})

console.log('filtroIdWeb', filtroIdWeb)

// output:
// "filtroIdWeb"
// ["Wilhams", "Meira", "Júnior"]