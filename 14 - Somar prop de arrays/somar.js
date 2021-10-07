let teste = [1,2,3,4,5,6,7,8,9]
let soma = 0

// Utilizando for
for (let i=0; i<teste.length;i++){
    soma += teste[i]
};

// Utilizando foreach
teste.forEach(function(e){
   soma += e
});

console.log('soma',soma) // 45

//  **** Soando propriedades de um objeto com reduce

let carros = [];

carros[0] = { modelo: 'Ka', preco: 5000 };
carros[1] = { modelo: 'Corsa', preco: 10000 };
carros[2] = { modelo: 'Palio', preco: 15000 };

// Aqui realiza a soma dos preços dos carros acessando a propriedade "preco" dentro do objeto
let total = carros.reduce(function(acc, valorAtual){
  return acc + valorAtual.preco
}, 0);

// Resultado da soma dos preços dos carros deve ser igual a 30000
console.log( total ); // 30000