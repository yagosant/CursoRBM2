import { Recipe } from "./types";

//função para pegar os dados, criando o tipo genérico de receita
async function getData(): Promise<Recipe[]>{
    const request = await fetch("https://receitas-server.vercel.app/api");
    const data = await request.json();
    console.log(data);
    return data;
}

//funcao de filtro dos ingredientes - Apenas o filtro especifico
async function filterByIngredients(ingredient: string){
    const filterData = await getData();
    const retorno  = filterData.filter(data => {
      return data.Ingredients.includes(ingredient)
    });
   console.log(retorno);
   
}

//getData();

filterByIngredients("butter");

