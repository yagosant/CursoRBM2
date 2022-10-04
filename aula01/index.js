var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//função para pegar os dados, criando o tipo genérico de receita
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch("https://receitas-server.vercel.app/api");
        const data = yield request.json();
        console.log(data);
        return data;
    });
}
//funcao de filtro dos ingredientes - Apenas o filtro especifico
function filterByIngredients(ingredient) {
    return __awaiter(this, void 0, void 0, function* () {
        const filterData = yield getData();
        const retorno = filterData.filter(data => {
            return data.Ingredients.includes(ingredient);
        });
        console.log(retorno);
    });
}
//getData();
filterByIngredients("butter");
export {};
