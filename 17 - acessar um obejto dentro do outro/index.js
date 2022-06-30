var dados = [
    {
        idAluno : "1",
        nome: "Pedro",
        classe : "A1",
        hp : "3",
        ap : "5",
        xp : "1"
    }, {
        idAluno : "1",
        nome: "Carlos",
        classe : "A1",
        hp : "8",
        ap : "7",
        xp : "1"
    }, {
        idAluno : "3",
        nome: "José",
        classe : "A1",
        hp : "3",
        ap : "3",
        xp : "8"
    }
    ]
    
    var alunos = {};
    
    for(var i=0;dados.length>i;i++){
    var key = 'a' + String(i);
    console.log('key:', String(i))
    alunos[key] = {
        idAluno : dados[i].idAluno,
        nome: dados[i].nome,
        classe : dados[i].classe,
        hp : dados[i].hp,
        ap : dados[i].ap,
        xp : dados[i].xp,
    };
    }
    
    console.log(alunos['a1'].nome)