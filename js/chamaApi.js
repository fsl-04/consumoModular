// https://dummyjson.com/carts

export function listaProdutos() {
    const conexao = fetch('https://dummyjson.com/carts');
    const conversao = conexao.json();
    return conversao;
}