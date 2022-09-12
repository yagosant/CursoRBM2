"use strict";
const titleElement = document.getElementById("title");
var Yago;
(function (Yago) {
    Yago["nome"] = "Yago dos Santos";
    Yago["GitHub"] = "https://github.com/yagosant";
    Yago["Linkdln"] = "https://www.linkedin.com/in/yago-dos-santos-ribeiro-a45b6990/?ppe=1";
})(Yago || (Yago = {}));
if (titleElement)
    titleElement.innerText = `Projeto Base do ${Yago["nome"]}`; // pegando os dados de um enum
