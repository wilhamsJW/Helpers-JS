

// Arrays com itens repetidos
var arr = [1, 1, 2, 3, 3, 4]
var semRepetidos = arr.filter(function(el, i) {
    // arr.indexOf(el)  --> estamos acessando o array em questão e fazendo um indexOF(el) nele e passando o 'el' ou o 
    // elemento que está sendo percorrido em questão -- O que isso vai fazer?
    // Isso vai me trazer o index do elemento em questão, mas aí eu pergunto: "Nós não já temos o índice do elmento em questão? que é o segundo
    // parmetro do filter? que seria o ' i ' ? Sim temos, mas com arr.indexOf(el) estou buscando percorrendo um novo item do meu array
    // e pegando o index dele, e o ' i ' tbm está percorrendo o array, então estamos percorrendo o mesmo array duas vezes e comparando
    // no return abaixo se eles são iguais, se houver iguais ele me retorna os iguais excluindo os repetidos
    // isso acontece pq há uma diferença na forma que cada um acessa os arrays e nessa diferença eles comparam indexs diferentes
    // fazendo com que o mesmo index não saia mais no array  "
    return arr.indexOf(el) === i;
});
console.log(semRepetidos);

// S -> é o array para qual o filter foi chamado, nesse caso é id_web
// seria a mesma coisa de usar o código acima, dessa forma:  return arr.indexOf(el) === i;
var semRepetidos = arr.filter(function(el, i, s) {
                return i === s.indexOf(el)
            })