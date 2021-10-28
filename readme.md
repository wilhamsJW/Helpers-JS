# JS-Util
Aqui se encontra alguns métodos criado para resolver alguns problemas do dia a dia com JS. Todas as soluções foram encontradas por mim mesmo no meu dia a dia de trabalho!

Obs: Os códigos podem ser testados em um editor de JS, como o https://jsbin.com/

Relação do conteúdo existente no projeto e explicação das pastas:

Pasta 01: Array - Inserindo uma inforamção de outro array em outro array, para isso ambos tem que ter um dado em comun, uma id outra particularidade

Pasta 02: Arrays_iguais - Suponhamos que vc recebeu um array com um lista de id e quer retirar alguns objeto do array que não devem ser apresentado, suponhamos que os arrays que tenha determinada id devem sair do array ou para salvar no banco ou para mostrar dados 
ao usuário na tela, veremos como fazer isso nessa pasta procurando por seu arquivo

Pasta 03: Datas - encontra algumas formas de trabalhar com datas em um sistema web, como:
1 - Pegar data de amanhâ
2 - Pegando data específica do passado
3 - Calcular tempo entre datas
4 - Formatar data para qualquer formato que vc deseja enviar para uma API

Pasta 04: Filter_e_index - Adicionando um novo item dentro de um array pelo índice

Pasta 05: img_formatar_data - Mostra uma img e um link do youtube sobre como adicionar ou subtrair datas no JS

Pasta 06: método_exibir - Se trata de um método criado pra retornar uma informação qUe existe em outro array que ambos tem
a algo em comum, poderia ser um id ou qq outra coisa

Pasta 07: retirar_tens_repetidos_do_array - Mostra duas formas de extrair itens repetidos de um array

Pasta 08: instalação de NVM

Pasta 09: extraindo_itens_de_array_e_iserindo_em_outro - 

Pasta 10: Pegando duas casa decimais

Pasta 11: Pegando duas casa decimais e convertendo para a moeda do páis que queremos
Iremos usar o toLocaleString() ele recebe alguns argumento - um objeto literal com as propriedades -, no meu caso eu utilizei:

**style** : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

* **decimal** para representar números simples.

. **currency** que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

* **percent** para formato percentual.

. **currency:** A moeda para usar na formatação monetária

Pasta 12: Agrupamento de arrays por uma determinada propriedade. Essencial quando se necessita exibir na tela varios itens agrupados e ordenados e não vem isso no response. Ex: temos 10 empresas e cada empresa tem vários produtos e seus preços, precisamos exibir uma lista com os preços e produtos de cada empresa mas de forma que fique tudo agrupado ou junto os preços e produtos de determinda empresa. 
Ex: 

Empresa 1: Produto: Caneta, Preço: $2,80
           Produto: tecla, Preço: $42,40 

Empresa 2: Produto: Caneta Azul, Preço: $32,80
           Produto: teclaAwert, Preço: $82,47

Empresa 2: Produto: monitor, Preço: $1232,80
           Produto: notbook, Preço: $4.566,87

Cada empresa acima está com seu produto de forma agrupada, dessa forma o usuário tem certeza q aquela empresa só possui aqueles produtos pq estão todos juntos   

Pasta 13: Conta quantos itens existes de cada tipo diferente em um array, exemplo:
tenho um array com canetas, lápis e borrachas, o código conta quantos existe.

Pasta 14: Soma valores dentro de um array e valores dentro de um objeto

Pasta 15: Mostrar o índice do item clikado

Pasta 16: Resolvendo problema global clássico do Javascript (lógica de array1s)
foi usado indexOf(), push(), apply e cáculo com Math.min (Dentro do arquivo
encontramos a descrição do problema que eu fiz e o código do stackOverFlow)
https://stackoverflow.com/questions/44732552/speeding-up-this-code-for-codefighters-javascript-firstduplicate-function