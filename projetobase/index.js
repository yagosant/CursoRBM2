"use strict";
const titleElement = document.getElementById("title");
var Yago;
(function (Yago) {
    Yago["nome"] = "Yago dos Santos";
    Yago["GitHub"] = "https://github.com/yagosant";
    Yago["Linkdln"] = "https://www.linkedin.com/in/yago-dos-santos-ribeiro-a45b6990/?ppe=1";
    Yago["site"] = "https://yagosant.github.io";
    Yago[Yago["idade"] = 28] = "idade";
})(Yago || (Yago = {}));
function getsite() { return Yago["site"]; }
if (titleElement)
    titleElement.innerText = `Projeto Base do ${Yago["nome"]}`; // pegando os dados de um enum
console.log(getsite());
function soma(num1, num2) {
    return console.log(num1 + num2);
}
soma(Yago.idade, 1);
