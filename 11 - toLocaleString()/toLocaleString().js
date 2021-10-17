function formatMoeda (item) {

      // Estou dando um parseInt pq o dado no meu caso veio como string apesar de ser números
     // então guardamos o valor convertido em uma var, caso contrário não irá fucnionar
    // toFixed(2) -> está pegando duas casas decimais após a vírgula pq o número vem assim:
   // "75.098839823"   
    var itemNumber = parseInt(item).toFixed(2)
    var formatado = itemNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatado;
}

