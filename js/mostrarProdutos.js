import { listaProdutos } from "./chamaApi";

const lista = document.querySelector('.produtos');

function exibirProdutos() {
    const listaApi = listaProdutos();

listaApi.carts.forEach(carrinho => {
    carrinho.carts.forEach(produto => {
        lista.appendChild(
            constroeCard()
        );
    })    
});    
}