function main() {
  
  const ruaCrname  = 'R FRANCISCO RODRIGUES SERRALHA 350 AP 204 BLOCO 33 CHACARAS TUBALINA E QUARTEL'
    
  //   let ruaClientWit = 'RUA FRANCISCO RODRIGUES'
  //   let complementOptions = 'BLOCO' 
  //   let numero = '350'
  //   let similaridade = 0
  //   let complement = 'Bloco 33 Apartamento 204'
  //   let maiorSimilaridade = 0
  //   let notEnterNumber = false    
    
    let ruaClientWit = 'RUA nada a ver rodrigues'
    let complementOptions = 'casa' 
    let numero = '455'
    let similaridade = 0
    let complement = 'Bloco 13 Apartamento 678'
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
          if (ruaCrname.includes(palavraRua)) { // Verifica se existe palavras da rua do cliente do wit dentro da rua do crName
            similaridade ++
            //console.log("palavraRua igual - cliente", palavraRua)
            console.log("1 similaridade", similaridade)
            //console.log("ruaCrname.includes(palavraRua)", ruaCrname.includes(palavraRua))
          }
  
      if (palavrasComplementOptions.length) {
          for (const palavraComplementOp of palavrasComplementOptions) { // Verifica se existe comlementOptions dentro da rua do CrName
            if (palavraComplementOp.trim().length === 0) { // 
              break;
            }
            if (ruaCrname.includes(palavraComplementOp)) {
              //console.log("palavraComplementOp igual", palavraComplementOp)
              console.log(" 2 similaridade", similaridade)
              similaridade ++
            }
          }
        } else if (palavrasComplementAux.length) {
          for (const palavraComplemenAux of palavrasComplementAux) { //  Verifica de o complemento existe dentro da rua do crName
            if (ruaCrname.includes(palavraComplemenAux)) {
              similaridade ++
              //console.log("palavraComplemenAux igual", palavraComplemenAux)
              console.log("3 similaridade", similaridade)
            }
          }      
        }
  
        if (ruaCrname.includes(numero) && !notEnterNumber) { // verificando se o numero da rua do cliente tem na rua do crName
          similaridade++;
          notEnterNumber = true
          //console.log('numero igual')
          console.log(" 4 similaridade", similaridade)
        }    
  
        if (similaridade > maiorSimilaridade) {
          maiorSimilaridade = similaridade
        }
  
      } // end for main
    }

    verificaRuaSimilar(ruaCrname)
    console.log('ultimo - maiorSimilaridade', maiorSimilaridade)
    
    if (maiorSimilaridade <= 1) {
        console.log('maiorSimilaridade', maiorSimilaridade)
        return 'NOVA VENDA'
    }
    
    return {
      lengthRuaCrName: ruaCrname.split(' ').length,
      palavrasParecidasEntreAsRuas: maiorSimilaridade,
      diferencaEntreRuas: Math.abs(maiorSimilaridade - ruaCrname.split(' ').length) 
    };
}
      
  console.log('main():', main())