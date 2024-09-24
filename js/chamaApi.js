// https://dummyjson.com/carts

export function listarProdutos() {
    const conexao = fetch('https://dummyjson.com/carts')
    const conversao = conexao.json();
    return conversao;
}
