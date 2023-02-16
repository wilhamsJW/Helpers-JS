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


// Formatar data para qualquer formato que vc deseja enviar para uma API


function formatDate(userDate) {

    var dia = userDate.split("/")[0]; // [0] -> posição sendo acessada na qual eu quero pegar dia, mes ou ano, método split() separa as strings pela '/' ou qq outro parametro
    var mes = userDate.split("/")[1];
    var ano = userDate.split("/")[2];

    //   Podemos fazer com slice para ter uma garantis q só irá pegar os dois últimos caracteres da string nos dando uma segurança a mais
    //   ou podemos apenas colocar ano + mes + dia
    //   return ano + ("0"+mes).slice(-2) + ("0"+dia).slice(-2);
    return ano + mes + dia;

}

console.log('formatDate() = ' + formatDate("12/31/2014")); // output = formatDate() = 20143112

// Também podemos usar a lib moment
/*
Você deve informar para o moment 
o formato de entrada, ou seja, como está 
a string com sua data antes de 
formatá-la pois internamente ele
fará um parse e chamará um new Date().

Fonte: http://momentjs.com/docs/#/parsing/string/
*/
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js"></script> */}

var data = moment("02/03/2018", "DD/MM/YYYY");

//Feito isso basta definir o formato de saída:
console.log(data.format("YYYY-MM-DD"));

// Manipulando data com replace e regex

var dat = "1999-09-28"

var reg = /(\d{4})-(\d{2})-(\d{2})/

var result = dat.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2.$3.$1.")

console.log("result:", result)

// A saída será: "09.28.1999." em formato DD/MM/AAAA
