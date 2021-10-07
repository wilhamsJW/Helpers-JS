// O código conta quantos "wilhasm" existem, e quantos cada número existe, vai me retornar
// um objeto com chave e visualViewport, onde chave é os itens deste array e os valores é a contagem
// de quantas vezes eles se repetem nesse array 

// Array que que será contado
var arr = ["Wilhams", "Wilhams", "7", "8", "9", "9", "9"];

// Objeto que receberá a contagem com chaves e valores
var counts = {};
arr.forEach(function (x) {

    // counts[x] -> estou inserindo cada elemento do array dentro do counts e usando o elemento percorrido
    // em questão como chave do objeto 'counts' e o valor será a expressão após o sinal de igual 

    // (counts[x] || 0) + 1 -> counts[x] || 0, na primeira interação do for ele vem undefined, por isso o -> 0,
    // pq o 0 irá somar com + 1 então se na próxima interação o item se repetir ele estará com 1 dentro e se somar
    // com + 1, resultará em dois, contando assim a quantidade q o item se repete dentro do array 

    // E isto é algo muito interessante pq está sendo montado o obejeto com chave e valor de forma automática
    //     Chave  &      valor  
        counts[x] = (counts[x] || 0) + 1;

});

arr.forEach(function (e) {
    //             console.log("e:", e)
    //             console.log("counts",counts[e])
    //             Abaixo valida qual item que tem só uma propriedade
    if (counts[e] == 1) {
        //                 console.log("O Item:", e , 'se repete', counts[e], 'vezes' )
    }
});

console.log("counts", counts)
// output
// [object Object] {
//     7: 1,
//     8: 1,
//     9: 3,
//     Wilhams: 2
//   }