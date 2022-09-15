"use strict";
var Yago;
(function (Yago) {
    Yago["nome"] = "Yago dos Santos";
    Yago["GitHub"] = "https://github.com/yagosant";
    Yago["Linkdln"] = "https://www.linkedin.com/in/yago-dos-santos-ribeiro-a45b6990/?ppe=1";
    Yago["site"] = "https://yagosant.github.io";
})(Yago || (Yago = {}));
const titleElement = document.getElementById("title");
if (titleElement)
    titleElement.innerText = `Exercicios aula 02 do ${Yago["nome"]}`; // pegando os dados de um enum
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
function categoriaFiltro(categoria) {
    const retornoLoja = loja.filter((produto) => {
        if (produto.categoria === categoria)
            return true;
        return false;
    });
    console.log(retornoLoja);
}
//exercicio 2
const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
let novoArray = [];
function partirArray(array) {
    const novoArrayPartido = []; // modelo de matriz esperado
    var quantidade_itens = 0;
    for (let index = 0; index < array.length; index++) {
        if (novoArrayPartido[quantidade_itens] === undefined)
            novoArrayPartido[quantidade_itens] = [];
        novoArrayPartido[quantidade_itens].push(array[index]);
        if ((index + 1) % 3 === 0)
            quantidade_itens = quantidade_itens + 1;
    }
    return novoArrayPartido;
}
//usar para teste exercicio 1
categoriaFiltro('blusa');
//usar para teste exercicio 2
novoArray = partirArray(numerosArray);
console.log(JSON.stringify(novoArray));
//Exercicio 3
//Faça uma função que retorna o array que é resultado do exercício acima, só que ao invés de grupos de 3, vai retornar em cada array interno, a soma dos itens. Exemplo:[[6],[15]...]
const arraySomado = novoArray.map((array) => {
    return array.reduce((acc, array) => {
        acc + array;
    });
});
