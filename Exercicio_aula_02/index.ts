
enum Yago {
    "nome"= "Yago dos Santos",
    "GitHub" = "https://github.com/yagosant",
    "Linkdln" = "https://www.linkedin.com/in/yago-dos-santos-ribeiro-a45b6990/?ppe=1",
    "site" = "https://yagosant.github.io",
    }

const titleElement = document.getElementById("title");
if (titleElement) titleElement.innerText = `Exercicios aula 02 do ${Yago["nome"]}`;// pegando os dados de um enum

//exercicio 1

const loja = [
    {
      id: 1,
      modelo: "blusa do naruto",
      marca: "lacosta",
      categoria: "blusa",
    },
    {
      id: 2,
      modelo: "bermuda do naruto",
      marca: "lacosta",
      categoria: "bermuda",
    },
    {
      id: 3,
      modelo: "bandana do naruto",
      marca: "lacosta",
      categoria: "acessorios",
    },
  ];

    //console.log(loja[1].categoria); - pegando os valores do trem
    
  function categoriaFiltro(categoria:string) {

    const retornoLoja = loja.filter((produto)=>{
      if(produto.categoria === categoria) return true;
      return false;
            
    });

    console.log(retornoLoja);

  }

  categoriaFiltro('blusa');

  //exercicio 2

  //Faça uma função que retorne um array, com arrays dentro (matriz) que contenham a sequencia de numeros de 1 a 27, separados por 3 em cada array interno

  const numerosArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
  let novoArray = [];

  function partirArray(array:number[]) {
    const novoArrayPartido: number[][] = []; // modelo de matriz esperado
    var quantidade_itens = 0;
    
    for (let index = 0; index < array.length; index++) {

      if(novoArrayPartido[quantidade_itens]===undefined) novoArrayPartido[quantidade_itens] = [];

      novoArrayPartido[quantidade_itens].push(array[index]);

      if((index + 1) % 3 === 0) quantidade_itens = quantidade_itens + 1;

    }
    return novoArrayPartido;
    
  }

  novoArray = partirArray(numerosArray);
  console.log(JSON.stringify(novoArray));
  

