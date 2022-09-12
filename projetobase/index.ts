const titleElement = document.getElementById("title");

enum Yago {
    "nome"= "Yago dos Santos",
    "GitHub" = "https://github.com/yagosant",
    "Linkdln" = "https://www.linkedin.com/in/yago-dos-santos-ribeiro-a45b6990/?ppe=1",
    "site" = "https://yagosant.github.io",
    "idade" = 28
    }

function getsite() { return Yago["site"];}

if (titleElement) titleElement.innerText = `Projeto Base do ${Yago["nome"]}`;// pegando os dados de um enum

console.log(getsite());

function soma(num1: number, num2: number) {
    return console.log(num1 + num2);
}

soma(Yago.idade,1);

