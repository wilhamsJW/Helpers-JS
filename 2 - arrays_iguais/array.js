// Suponhamos que vc recebeu um array com um lista de id e quer retirar alguns objeto do array que não devem ser apresentado,
//  suponhamos que os arrays que tenha determinada id devem sair do array ou para salvar no banco ou para mostrar dados 
// ao usuário na tela, veremos como fazer isso nessa pasta procurando por seu arquivo

// Supondo que se trata de dois arrays vindo do banco com vários dados dentro 
// $scope.row.idsSitesBloqueados se trata de um array apenas com a id bloqueadas e não com todas as outras info do site

// $scope.site_nome_fantasia tem todas as info do array, porém preciso tirar as info bloqueada, pela id dele, estou retirando um
//  item q tem uma id em comun, poderia ser qq outra coisa

// $scope.site_nome_fantasia.splice(i, 1); --> exclui o item igual encontrado, o 'i' é o index do array q é igual 
// ao id do block (block está assim sem acessar block.id pq se trata de um array só com id, só com número mais precisamente), 
// e o '1', é quantidade itens a ser retirado,  

// Exemplos de como seria os arrays apenas para exemplicaçõa ignorem o $scope.row pois é uma particularidade do Angular.JS
$scope.row.idsSitesBloqueados = [45, 56, 78, 76, 32]
$scope.site_nome_fantasia = [{
    'nome': 'junior',
    'idade': 25,
    'site': 'jw',
    'id': 45
},
{
    'nome': 'Meira',
    'idade': 25,
    'site': 'jw',
    'id': 56
},
{
    'nome': 'Wilhams',
    'idade': 25,
    'site': 'jw',
    'id': 00
}]

$scope.row.idsSitesBloqueados.forEach(function (block,) {
    $scope.site_nome_fantasia.forEach(function (id_disponivel, i) {
        if (block == id_disponivel.id) {
            $scope.site_nome_fantasia.splice(i, 1);
        }
    })
})