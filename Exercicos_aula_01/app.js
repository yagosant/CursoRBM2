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
    titleElement.innerText = `Exercicios aula 01 do ${Yago["nome"]}`; // pegando os dados de um enum
function geraNumAleatorio() {
    return Math.floor(Math.random() * 11);
}
function arredondaNumero(numero) {
    return parseFloat(numero.toFixed(2));
}
//exercicio 1 
function soma(num1, num2) {
    return num1 + num2;
}
const numero1 = geraNumAleatorio();
const numero2 = geraNumAleatorio();
const numero3 = geraNumAleatorio();
const numero4 = geraNumAleatorio();
const numero5 = geraNumAleatorio();
console.log(`A soma de ${numero1} e ${numero2} é = ${soma(numero1, numero2)}`);
//exercicio 2
function mediaNumeros(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}
console.log(`A Média de ${numero1} e ${numero2}, ${numero3}, ${numero4}, ${numero5} é = ${mediaNumeros(numero1, numero2, numero3, numero4, numero5)}`);
//exercicio 3
function calcularIMC(altura, peso) {
    return arredondaNumero(peso / (altura * altura));
}
const peso = arredondaNumero(Math.random() * 201);
const altura = arredondaNumero(Math.random() * 2);
console.log(`O seu IMC é baseado no peso: ${peso} e na altura: ${altura} é = ${calcularIMC(altura, peso)}`);
