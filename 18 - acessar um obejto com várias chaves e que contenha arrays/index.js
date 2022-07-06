/**
 * Temos o primeiro objeto chamado mvnoObj com várias chaves dentro e a chave "active" possui um arra
 * array de objetos dentro, então temos um exemplo de como acessa-los, existe várias formas de fazer isso
 * mas aqui estamos usando o "Object.values(mvnoObj)" e passando "mvnoObj" como parâmetro, isso vai transformar
 * "mvnoObj" em um array e dessa forma terei acesso aos valores direto e conseguirei assim percorrer eles com um for
 * ou qual qq outro meio de percorrer um array
 */

 mvnoObj = {
    quantity: {
      active: 1,
      inactive: 0,
      toActive: 0,
      unknown: 0,
      toPortability: 0,
    },
    active: [
      {
        contractNumber: "883315",
        type: "active",
        isPorted: true,
        msisdn: "99999999999",
        activatedAt: "03/07/2022 21:40:03",
        createdAt: "02/04/2022 10:29:57",
        deletedAt: "0000-00-00T00:00:00.000",
        name: "ATIVE 10 GB",
        iccid: "89552600000003915335",
        chipStatus: "blocked",
      },
      {
        contractNumber: "883315",
        type: "active",
        isPorted: true,
        msisdn: "555555555",
        activatedAt: "03/07/2022 21:40:03",
        createdAt: "02/04/2022 10:29:57",
        deletedAt: "0000-00-00T00:00:00.000",
        name: "ATIVE 10 GB",
        iccid: "89552600000003915335",
        chipStatus: "blocked",
      },
      {
        contractNumber: "883315",
        type: "active",
        isPorted: true,
        msisdn: "777777777777777777777777777777777",
        activatedAt: "03/07/2022 21:40:03",
        createdAt: "02/04/2022 10:29:57",
        deletedAt: "0000-00-00T00:00:00.000",
        name: "ATIVE 10 GB",
        iccid: "89552600000003915335",
        chipStatus: "blocked",
      },
      {
        contractNumber: "883315",
        type: "active",
        isPorted: true,
        msisdn: "9999999999999999999999999999999999999999",
        activatedAt: "03/07/2022 21:40:03",
        createdAt: "02/04/2022 10:29:57",
        deletedAt: "0000-00-00T00:00:00.000",
        name: "ATIVE 10 GB",
        iccid: "89552600000003915335",
        chipStatus: "blocked",
      },
    ],
    inactive: [],
    toActive: [],
    unknown: [],
    toPortability: [],
  };
  
  /**
   * contracts é um objeto com uma chave chamada "options", essa chave é um array com objetos dentro, para percorrer ela, usamos tbm
   * Object.values(contracts.options) passando "contracts.options" como parâmetro, dessa forma transformamo em array e 
   * temos acesso aos valores deste objeto, percorrendo eles com um for ou outro meio de acessar um array 
   */
  
  contracts = {
    options: [
      {
        id: "506625",
        number: "13401",
        companyCode: "11",
        region: "paraiba",
        status: [Object],
        subscriber: [Object],
        address: [Object],
        payment: [Object],
        services: [Object],
        invoices: [Object],
        serviceOrders: [Object],
        hasMasterResolve: false,
        activeType: "inactive",
        subscriberWithDebts: false,
        mvno: "99999999999",
      },
      {
        id: "506625",
        number: "13401",
        companyCode: "11",
        region: "paraiba",
        status: [Object],
        subscriber: [Object],
        address: [Object],
        payment: [Object],
        services: [Object],
        invoices: [Object],
        serviceOrders: [Object],
        hasMasterResolve: false,
        activeType: "inactive",
        subscriberWithDebts: false,
        mvno: "99999999999",
      },
      {
        id: "506625",
        number: "13401",
        companyCode: "11",
        region: "VARGINHA",
        status: [Object],
        subscriber: [Object],
        address: [Object],
        payment: [Object],
        services: [Object],
        invoices: [Object],
        serviceOrders: [Object],
        hasMasterResolve: false,
        activeType: "inactive",
        subscriberWithDebts: false,
        mvno: "555555555",
      },
    ],
    search: "69391378668",
  };
  
  var keyAttMvno = Object.values(mvnoObj);
  
  var contractsArray = Object.values(contracts.options);
  
  for (var i = 0; i < keyAttMvno.length; i += 1) {
    var att = keyAttMvno[i];
  
    for (var j = 0; j < att.length; j += 1) {
      var mvno = att[j];
  
      for (var k = 0; k < contractsArray.length; k += 1) {
        var contracts = contractsArray[k];
  
        // Aqui temos uma comparação para saber se em contracts e mvno existem algo em comum, o comum entre eles é mvno.msisdn e contracts.mvno
        if (mvno.msisdn == contracts.mvno) {
          console.log("mvno.msisdn", mvno.msisdn);
          console.log("contracts.mvno", contracts.mvno);
          mvno.region = contracts.region;
        }
      }
    }
  }
  
  console.log("keyAttMvno", keyAttMvno);
  