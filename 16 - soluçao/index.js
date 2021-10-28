// Problema teste que deve ser resolvido

// Dado um array a que contém apenas números no intervalo de 1 até a.length,
// encontre o primeiro número duplicado para o qual a segunda ocorrência possui o
// índice mínimo. Em outras palavras, se houver mais de 1 número duplicado, retorne o
// número para o qual a segunda ocorrência possui um índice menor do que a segunda
// ocorrência do outro número. Se não houver tais elementos, retorne -1.
// Exemplo: Para a = [2, 1, 3, 5, 3, 2] , a saída deve ser firstDuplicate(a) = 3 .
// Existem 2 duplicatas: números 2 e 3. A segunda ocorrência de 3 tem um índice menor
// do que a segunda ocorrência de 2, portanto, a resposta é 3.
// Para a = [2, 4, 3, 5, 1], a saída deve ser firstDuplicate(a) = -1 .

var teste1 = [2, 1, 3, 5, 3, 2];
var teste2 = [32, 33, 34, 32, 33];
var teste3 = [7, 8, 7, 8];
var teste4 = [11, 12, 13, 14, 15];

function firstDuplicate(arr) {
    var arr1 = new Array();
    var result = new Array;

    arr.forEach((el, i) => {

        // arr.indexOf(el) -> é o indice do elemento percorrido em questão, se houver
        // elementos iguais o índice é o mesmo, exibindo assim uma forma de achar elementos
        // iguais pelo método indexOf()
        // então se arr.indexOf(el) != i me retornará 'arr.indexOf(el)' diferente de 'i'
        // se eles forem iguais é pq não são números repetidos, mas se forem diferentes
        // o índice definido em 'arr.indexOf(el)' fica diferente da posicção definida em 'i'
        // isso acontece pq elementos iguais tem o mesmo índice porém com posições dentro
        // do array diferente
        // Ex:         arr = [2, 1, 3, 5, 3, 2]
        // suas posições são [0, 1, 2, 3, 3, 4]
        // seus índices são  [0, 1, 2, 3, 2, 0] - índices definidos com indexOf()
        // Note que o 2 e 3 tem o mesmo indexof() 
        // e o 'i' a posição
        if (arr.indexOf(el) != i) {
            // armazeno os  índices dos repetidos
            arr1.push(i)
        }

    });

    // verifico qual índice é menor
    result = Math.min.apply(Math, arr1);
    // arr[result] -> result contém o índice do menor, estou passando ele para 'arr' ser acessado
    // e exibido como valor final, então 'arr[result]'me trás pelo índice o valor da segunda
    // ocorrencia menor que a primeira
    return arr[result] ? arr[result] : -1;
}


console.log('result has to be  3', firstDuplicate(teste1));
console.log('result has to be 32', firstDuplicate(teste2));
console.log('result has to be  7', firstDuplicate(teste3));
console.log('result has to be -1', firstDuplicate(teste4));









//   Solução do StackOverFlow

// const test0 = [2, 1, 3, 5, 3, 2]
// const test1 = [72, 73, 73, 71, 75, 72]
// const test2 = [92, 94, 93, 95, 91]
// const test3 = [8, 9, 18, 21, 21, 23, 24, 9, 8]

// function firstDuplicate(arr) {
//     const obj = {};
//     for (let v of arr) {

//         // Este if valida se existe o valor dentro do objeto, se existir eu paro o código
//         // imediatamente e retorno o 'V' que é o valor de segunda ocorrençia menor encontrado 
//         // repetido 
//         if (obj[v]) return v

//         // A linha obj[v] = v está construindo o objeto sem itens repetidos porém a construção é imterrompida
//         // no if acima quando encontro o segundo item repetido pois o segundo item repetido
//         // já tem um índice menor, pq tudo que vem após ele claramente é maior, então finalizo
//         // o código retornado o 'V' que é o número encontrado com a segunda menor ocorrençia
//         // e não adiciono os outros valores no objeto pois não há necessidade uma vez que 
//         // o problema foi resolvido

//         // obj[v] = v é um forma de criar um objeto para que tenha o mesmo nome de chave e valor
//         obj[v] = v;

//     }

//     //   Esse return só vai acontecer se o if acima não retornar nada
//     return -1
// }

// // Aqui fiz uma forma mais didática porém com o processamento maior
// function firstDuplicate(a) {
//     const obj = {}
//     for (let v of a) {
//         if (!obj[v]) {
//             obj[v] = v
//         } else {
//             return v
//         }

//     }

//     return -1
// }

// console.log('result has to be  3:', firstDuplicate(test0))
// console.log('result has to be 73:', firstDuplicate(test1))
// console.log('result has to be -1:', firstDuplicate(test2))
// console.log('result has to be 21:', firstDuplicate(test3))