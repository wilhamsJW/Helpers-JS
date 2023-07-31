function main() {
  
    const ruaCrname  = 'r lenira maria dos santos reis, 353, cidade industrial, curitiba - pr, 81250720'
  
      let ruaClientWit = 'Rua Lenira Maria dos Santos Reis'
      let complementOptions = 'casa' 
      let numero = '353'
      let similaridade = 0
      let complement = 'casa a'
      let zipCode = '81250720'
      let maiorSimilaridade = 0
      let notEnterNumber = false   
  
      const formatRua = (rua) => {
        return rua.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[,\.\!\?]/g, '') || ""
      }
    
      // Verifica rua mais similar possivel entre rua do cliente e rua que consta no crName
      const verificaRuaSimilar = (ruaCrname) => {
        const palavrasRuaClientWit = formatRua(ruaClientWit).split(" ")
        const palavrasComplementOptions = formatRua(complementOptions).split(" ")
        const palavrasComplementAux = formatRua(complement).split(" ")
  
        //console.log('palavrasRuaClientWit', palavrasRuaClientWit)
        //console.log('ruaCrname', formatRua(ruaCrname).split(' '))
    
        for (const palavraRua of palavrasRuaClientWit) {
          //console.log('palavraRua Cliente:', palavraRua)
          //console.log('ruaCrname:', formatRua(ruaCrname))
  
            if (formatRua(ruaCrname).includes(palavraRua)) { // Verifica se existe palavras da rua do cliente do wit dentro da rua do crName
              similaridade ++
              //console.log("palavraRua igual - cliente", palavraRua)
              console.log("1 similaridade - rua igual", similaridade)
              //console.log("ruaCrname.includes(palavraRua)", ruaCrname.includes(palavraRua))
            }
    
        if (palavrasComplementOptions.length) {
            for (const palavraComplementOp of palavrasComplementOptions) { // Verifica se existe comlementOptions dentro da rua do CrName
              if (palavraComplementOp.trim().length === 0) {
                break;
              }
              if (ruaCrname.includes(palavraComplementOp)) {
                //console.log("palavraComplementOp igual", palavraComplementOp)
                console.log(" 2 similaridade - palavraComplementOp igual", similaridade)
                similaridade ++
              }
            }
          } else if (palavrasComplementAux.length) {
            for (const palavraComplemenAux of palavrasComplementAux) { //  Verifica de o complemento existe dentro da rua do crName
              if (ruaCrname.includes(palavraComplemenAux)) {
                similaridade ++
                //console.log("palavraComplemenAux igual", palavraComplemenAux)
                console.log("3 similaridade - palavraComplemenAux igual", similaridade)
              }
            }      
          }
    
          if (ruaCrname.includes(numero) && !notEnterNumber) { // verificando se o numero da rua do cliente tem na rua do crName
            similaridade++;
            notEnterNumber = true
            //console.log('numero igual')
            console.log(" 4 similaridade - numero igual", similaridade)
          }    

          if (ruaCrname.includes(zipCode)) {
            similaridade++;
            console.log(" 5 similaridade - zipcode igual", similaridade)
          }
    
          if (similaridade > maiorSimilaridade) {
            maiorSimilaridade = similaridade
          }
    
        } // end for main
      }
  
      verificaRuaSimilar(ruaCrname)
      
      if (maiorSimilaridade <= 1) {
          //console.log('maiorSimilaridade', maiorSimilaridade)
          //return 'NOVA VENDA'
      }
  
      const ruaCrnameLength = ruaCrname.split(' ').length
      //const proximidade = (Math.abs(maiorSimilaridade - ruaCrnameLength) / maiorSimilaridade) * 10
      const diferencaEntreRua = Math.abs(maiorSimilaridade - ruaCrnameLength)
      const porcentagemDistanciaProximidade = (diferencaEntreRua / Math.max(maiorSimilaridade, ruaCrnameLength)) * 100;
  
      // Se for menor que 40 indica que esta é a rua igual
  
      if (porcentagemDistanciaProximidade < 40) {
        console.log('cliko nele ou seleciono ele')
      }
  
  
      return {
        lengthRuaCrName: ruaCrnameLength,
        palavrasParecidasEntreAsRuas: maiorSimilaridade,
        diferencaEntreRuas: diferencaEntreRua,
        porcentagemDistanciaProximidade: porcentagemDistanciaProximidade.toFixed(0) == '0' ? 'Exatamente iguais' : porcentagemDistanciaProximidade.toFixed(0)
      };
  }
        
    console.log('main():', main())
