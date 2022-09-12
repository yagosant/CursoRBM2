const titleElement = document.getElementById("title");

enum Yago {
    "nome"= "Yago dos Santos",
    "GitHub" = "https://github.com/yagosant",
    "Linkdln" = "https://www.linkedin.com/in/yago-dos-santos-ribeiro-a45b6990/?ppe=1"
    }

if (titleElement) titleElement.innerText = `Projeto Base do ${Yago["nome"]}`;// pegando os dados de um enum

