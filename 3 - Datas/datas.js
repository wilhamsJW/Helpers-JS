// ======================  Pegando data de amanhã   =======================

function diasNoMesSearch(mes, ano) {
    let data = new Date(ano, mes, 0);
    return data.getDate();
}

let mesAtual = new Date().getMonth() + 1; //getMonth retorna um array dos meses que vai de 0 a 11, onde 0 é Janeiro, e 11 é Dezembro. a função "diasNoMesSearch" quer receber o numero do mes atual certo. por esses motivo tem +1 no final. 

let anoAtual = new Date().getFullYear(); //pega o ano completo
let diasNoMes = diasNoMesSearch(mesAtual, anoAtual); //chama a função!
let diaAtual = new Date().getDate(); //pega o dia atual.

if (diaAtual === diasNoMes) {

    diaAtual = 1; //se tivermos no ultimo dia do mês. vamos setar 1 como dia seguinte!

} else {

    diaAtual += +1; //caso não estejamos no ultimo dia do mês, vamos fazer um incremento de +1.

}

console.log(diaAtual); //saída vai ser sempre seu dia seguinte.



//    ======================  Outro exemplo de pegar data de amanhâ   =======================

var diaHoje = new Date(); // Armazenar a data atual em uma variável

const diaAmanha = new Date(diaHoje); // Inserir a data atual dentro de outra data atual, apenas se por ventura vc esteja usando a data atual em outro local, não irá se misturar a data atual e data de hoje

diaAmanha.setDate(diaAmanha.getDate() + 1) // 


console.log('diaAmanha.getDate()', diaAmanha.getDate()) // sempre sairá data de amnha sem perigo se sair com data 32



//    ======================  Pegando data específica do passado   =======================

var dataHoje = new Date();  // Pegando a data de hoje

// Vamos pegar uma data de 4 meses atrás como exemplo e armazenar na variável data4MesesAtras
var data4MesesAtras = new Date(dataHoje.getFullYear(), dataHoje.getMonth() - 4, dataHoje.getDate());

// dataHoje.getFullYear() = pega o ano que vc desejar (sem parâmetros pega a data atual)
// dataHoje.getMonth() = pega o mês q vc desejar (o -4 acima se refere a 4 meses atrás)
// dataHoje.getDate() = pega o dia q vc desejar (sem parâmetros pega a data atual)

// Daí podemos fazer uma função q recebe a data inicial e compara com essa data de 4 meses atrás para validarmos algo para o usuário: ex.:

function validarData120Dias(dataInicio) {
    return inicio < data4MesesAtras; // pedimos para retornar o valor dessa expressão q será o boolean
}




// ======================  Calcula tempo entre datas  =======================

function daysBetweenDates(inicio, fim) {
    // essa expressão se refere á um dia em JS, o JS calcula 1000 milisegundos * 60 segundos * 60 minutos * 24 horas, o que resulta em 864000000 -> esse valor é um dia para o JS

    var days = 1000 * 60 * 60 * 24;
    return Math.abs(Math.round((inicio - fim) / days));

    // Math.abs -> deixa os números absolutos
    // Math.round -> arredonda os número, tem q fazer isso pq se não os números vem quebrados ou negativos        
}



