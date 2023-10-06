/************************************************************
 * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON.
 * Data: 29/09/2023.
 * Autor: Bianca Maria Soares
 ************************************************************/

// [ ] -> Representa a estrutura array.
// { } -> Representa a estrutura JSON.

const introducaoArray = function(){
    //Criando um array de forma manual.
    let listaDeNomes = ['José', 'Ana', 'Luis', 'Maria', 'Carlos','Eduardo']

    //Exibe os dados do array.
    console.log(listaDeNomes)
    //Exibe os dados do array em formato de tabela.
    console.table(listaDeNomes)
    //Retorna a qtde de elementos de um array.
    console.log(listaDeNomes.length)

    //Adiciona elemento na tabela 'no final'.
    listaDeNomes.push('Roberto')
   
    //Adiiciona elemento na tabela 'no começo'.
    listaDeNomes.unshift('Roberto')
   
    console.table(listaDeNomes)

    //Remove o último elemento do array.
    listaDeNomes.pop()

    //Remove o primeiro elemento do array.
    listaDeNomes.shift()

    //Remove um elemento baseado no índice, podendo definir a qtde de itens a serem excuídos.
    //Ex: splic(2,3) -> 2 é referente ao índice e 3 é refereente a qtde de itens.
    listaDeNomes.splice(2,3)
   
    console.table(listaDeNomes)

    listaDeNomes.push('André da Silva', 'ricardo da Silva', 'João da Silva', 10 , true)
    console.log(listaDeNomes);

    //typeof -> Retorna tipo de dados de um elemento
    console.log(typeof(listaDeNomes[7]))
   
}

const percorrendoArray = function (){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', ' Processador', 'HD']

    //------------------------------------------------------------------------------------------------------------------------------------------------
    //While

    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do Produto: ' + listaDeProdutos [cont])
    //     cont +=1
    // }

    //For

    // for(let cont=0; cont < listaDeProdutos.length; cont++){
    //     console.log('Nome do Produto: ' + listaDeProdutos [cont])
    // }

    //Foreach 
    // listaDeProdutos.forEach(function (produto, indice){
    //     console.log(indice + '- Nome do produto: ' + produto)
    // })

    //-------------------------------------------------------------------------------------------------------------------------

    //Retorna o indice do elemento que foi encontrado
    //Caso não exista o item retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'))

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Notebook'))
}
const filtrarProdutos = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', ' Processador', 'HD']
    let nome = nomeProduto;

    // return listaDeProdutos.includes(nome);

    let status = false;

    listaDeProdutos.forEach(function(produto){
        if (produto.toUpperCase() == nome.toUpperCase())
        status = true
    })
    return status
}
console.log(filtrarProdutos('mouse'))
// percorrendoArray();
//introducaoArray()

// -----------------------------------------------------------------------------

const manipularArrayJson = function(){
    /*
    [] -> Representa um array
    {} -> Representa um Json

    EX: { atributo: valor}
        { nome: 'José' telefone:'795605640550'}

    */

    // Criando objetos Json ("colunas da tabelas")
    let contato = {nome: 'José da Silva', telefone: '277778595', email: 'jose@gmail.com'}
    let contato2 = {nome: 'Maria da Silva', telefone: '22366556', email: 'maria@gmail.com'}
    let contato3 = {nome: 'Beatriz Sousa', telefone: '224785956', email: 'beatriz@gmail.com'}

    // add elementos individuais nos objetos JSON
    contato.celular = '277778595';
    contato.data_nascimento = '27-12-2006'

    contato2.celular = '22366556'


    // Criando um array ("tabelas") de dados com Json
    let arrayContatos = [contato, contato2, contato3]; 


  // console.table (arrayContatos);
   // console.table(arrayContatos[1].nome);

   arrayContatos.forEach(function(dadosContato){
    console.log('Nome:' + dadosContato.nome);
    console.log('Telefone:' + dadosContato.telefone);
    console.log('Email:' + dadosContato.email);
    if (dadosContato.celular != undefined)
         console.log('Celular:' + dadosContato.celular);
    if (dadosContato.data_nascimento != undefined)
        console.log ('Data_Nacimento:' + dadosContato.data_nascimento)

    console.log('********************************* \n')
   })
    
  
}

const cadastrarProdutos = function(){
    let listDeMarcas = [
                            {id: 1, nome_marca: 'Dell'},
                            {id: 2 , nome_marca: 'Apple'},
                            {id: 3, nome_marca: 'Lenovo'},
                            {id: 4, nome_marca: 'Positivo'},
                            {id: 5, nome_marca: 'Razer'},
                            {id: 6, nome_marca: 'Logitech'},
                            {id: 7, nome_marca: 'Multilaser'}
                       ];
      // cria objeto array para guardar os produtos
       let arrayProdutos = [];

     // cria o objeto JSON para colocar o array de produtos
     let jsonProdutos = {};


let listaDeCategorias =  [          
                            {id: 1 , nome_categoria: 'Periférico' , descricao_categoria: 'Perifericos de computador'},
                            {id: 2 , nome_categoria: 'Hardware' , descricao_categoria: 'Hardware para montar computador'},
                            {id: 3 , nome_categoria: 'Computador' , descricao_categoria: 'Computadores completos'},    
                            {id: 4 , nome_categoria: 'Games' , descricao_categoria: 'Acessorios para gamers'}
                         ]

let listaDeSituacao = [
                            {id: 1, situacao: 'Novo'},
                            {id: 1, situacao: 'Semi-Novo'}
                      ]

let listaDeCores = [
                           {id: 1, nome_cor: 'Branco'},
                           {id: 2, nome_cor: 'Preto'},
                           {id: 3, nome_cor: 'Cinza'},
                           {id: 4, nome_cor: 'Vermelho'},
                           {id: 5, nome_cor: 'Azul'},
                                  
                   ]                      
    let produto1 = {
                     nome: 'Mouse',
                     descricao: 'Mouse Optico com fio',
                     qtde: 50,
                     valor:60.00,
                     marca: listDeMarcas[0],
                     categoria: listaDeCategorias[0],
                     situacao: listaDeSituacao[0],
                     cor: [
                        listaDeCores[0], 
                        listaDeCores[1],
                        listaDeCores[2],
                     ]
                   }

let produto2 = {
             nome:'Teclado',
             descricao: 'Teclado gamer',
             qtde:20,
             valor:50.00,
             marca:listDeMarcas[3],
             categoria: listaDeCategorias[0],
             situacao: listaDeSituacao[1],
             cor: listaDeCores
     
              } ;

              //add os produtos em um array de produtos
              arrayProdutos.push(produto1);
              arrayProdutos.push(produto2);

              //add o array com todos os produtos em um JSON
              jsonProdutos.lista_produtos = arrayProdutos;
              //retorna a qtde de itens no JSON
              jsonProdutos.count = arrayProdutos.length;

              console.log(jsonProdutos);

        
}

cadastrarProdutos();

//manipularArrayJson();