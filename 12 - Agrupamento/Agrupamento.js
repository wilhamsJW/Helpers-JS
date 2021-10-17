// O objeto está com todos os itens bagunçados para que a função reorganize
// a chave para agrupamento será out_nome_empresa, todos os arrays q tiverem a mesma chave com
// nome empresa deve ficar juntos um do outro
var itens = {
    "record": [{
        "out_id_empresa": 1, "out_nome_empresa": "Teste Sporting", "out_id_localidade": 177
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Homologação LE", "out_id_localidade": 191
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Katharine Wilderman", "out_id_localidade": 191
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Valida Futebol", "out_id_localidade": 1
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Teste Sporting", "out_id_localidade": 2
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Valida Futebol", "out_id_localidade": 1
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Katharine Wilderman", "out_id_localidade": 1
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Valida Futebol", "out_id_localidade": 1
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Teste Sporting", "out_id_localidade": 1
    },

    {
        "out_id_empresa": 1, "out_nome_empresa": "Katharine Wilderman", "out_id_localidade": 1
    }

    ]
}

function agruparPor(objetoArray, idade) {
    return objetoArray.reduce(function (valorInicial, valorAtual) {
      var key = valorAtual[idade];
      if (!valorInicial[key]) {
        valorInicial[key] = [];
      }
      valorInicial[key].push(valorAtual);
      return valorInicial;
    }, {});
  }
  
  let grupodePessoas = agruparPor(itens.record, "out_nome_empresa");
  console.log('grupodePessoas',grupodePessoas)

//   Output

// [object Object] {
//   Homologação LE: [[object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 191,
//   out_nome_empresa: "Homologação LE"
// }],
//   Katharine Wilderman: [[object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 191,
//   out_nome_empresa: "Katharine Wilderman"
// }, [object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 1,
//   out_nome_empresa: "Katharine Wilderman"
// }, [object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 1,
//   out_nome_empresa: "Katharine Wilderman"
// }],
//   Teste Sporting: [[object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 177,
//   out_nome_empresa: "Teste Sporting"
// }, [object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 2,
//   out_nome_empresa: "Teste Sporting"
// }, [object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 1,
//   out_nome_empresa: "Teste Sporting"
// }],
//   Valida Futebol: [[object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 1,
//   out_nome_empresa: "Valida Futebol"
// }, [object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 1,
//   out_nome_empresa: "Valida Futebol"
// }, [object Object] {
//   out_id_empresa: 1,
//   out_id_localidade: 1,
//   out_nome_empresa: "Valida Futebol"
// }]
// }


// ================== Outro exemplo (Agrupamento por idade)

var itens = {
    "ok": [{
        "nome": 'Wilhams',
        "idade": 27
    },

    {
        "nome": 'Meira',
        "idade": 26
    },
    {
        "nome": 'Junior',
        "idade": 28
    },
    {
        "nome": 'Franciso',
        "idade": 27
    },
    {
        "nome": 'JUnhassskmd',
        "idade": 28
    },
    {
        "nome": 'wertttt',
        "idade": 26
    },
    {
        "nome": 'qwertrtt',
        "idade": 27
    }
 ]
}

function agruparPor(objetoArray, idade) {
  return objetoArray.reduce(function (valorInicial, valorAtual) {
    var key = valorAtual[idade];
    if (!valorInicial[key]) {
      valorInicial[key] = [];
    }
    valorInicial[key].push(valorAtual);
    return valorInicial;
  }, {});
}

let grupodePessoas = agruparPor(itens.ok, "idade");
console.log('grupodePessoas',grupodePessoas)


// "grupodePessoas"
// [object Object] {
//   26: [[object Object] {
//   idade: 26,
//   nome: "Meira"
// }, [object Object] {
//   idade: 26,
//   nome: "wertttt"
// }],
//   27: [[object Object] {
//   idade: 27,
//   nome: "Wilhams"
// }, [object Object] {
//   idade: 27,
//   nome: "Franciso"
// }, [object Object] {
//   idade: 27,
//   nome: "qwertrtt"
// }],
//   28: [[object Object] {
//   idade: 28,
//   nome: "Junior"
// }, [object Object] {
//   idade: 28,
//   nome: "JUnhassskmd"
// }]
// }
