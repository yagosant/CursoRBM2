import { Recipe } from "./types";

//pega uma string e dividi em array mediante ao campo de paramentro
function splitSearch(search: string){
  return search.split(",");

}

//função para pegar os dados, criando o tipo genérico de receita
async function getData(): Promise<Recipe[]>{
    const request = await fetch("https://receitas-server.vercel.app/api");
    const data = await request.json();
    console.log(data);
    return data;
}

//funcao de filtro dos ingredientes - Apenas o filtro especifico
/* async function filterByIngredients(ingredient: string){
    const filterData = await getData();
    const retorno  = filterData.filter(data => {
      return data.Ingredients.includes(ingredient)
    });
   console.log(retorno);
   
} */

//filtro multi itens do mesmo nome
/* async function filterByIngredients(ingredient: string){
  const data = await getData();
  const filterData  = data.filter(recipe => {
    const ingredientIncludes =  recipe.Ingredients.filter(recipeIngredient=>{
      //joga tudo para minusculo
      return recipeIngredient.toLowerCase().includes(ingredient)
    });

    if(ingredientIncludes.length) return recipe;
  });
 console.log(filterData);
}
  */

//função de filtro para mais de um item
async function filterByIngredients(ingredient: string){

  //pega os dados da API
  const data = await getData();
  const filterData  = data.filter(recipe => {

    //verifica se tem mais de um item na pesquisa
    const isMultiple= splitSearch(ingredient).length >1;

    //caso tenhamos apenas 1 ingrediente
    if(!isMultiple) {
      const ingredientIncludes =  recipe.Ingredients.filter(recipeIngredient=>{
        return recipeIngredient.toLowerCase().includes(ingredient.toLowerCase());
      });

      return ingredientIncludes.length ? recipe : false;
    }
    
    //caso tenha mais de um ingrediente, cria um array para salvar o retorno da pesquisa
    if(isMultiple){
    let acumulador: string[] = [];
    const searchValues = splitSearch(ingredient);

    for (let i = 0; i < searchValues.length; i++) {
      for (let y = 0; y < recipe.Ingredients.length; y++) {
        if(recipe.Ingredients[y].includes(searchValues[i])){
          if(acumulador.includes(searchValues[i])){
            return false;
          } 
          acumulador.push(searchValues[i]);
        }    
      }    
    }

    if(acumulador.length === searchValues.length) return true;
  }
  });
 console.log(filterData);
}
 
//getData();

filterByIngredients("butter,dark");

