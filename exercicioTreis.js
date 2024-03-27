
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 },
    { id: 4, nome: "Gorro", preco: 7.50 },
    { id: 4, nome: "Luva", preco: 20 }
]

function filtrarOrdenarProdutosPorPreco(valorMaximo) {
    const arrayFiltrado = listaProdutos.filter(produto => produto.preco <= valorMaximo);

    const arrayOrdenado = arrayFiltrado.sort((a, b) => b.preco - a.preco);
    return arrayOrdenado;
}

const produtosBaratos = filtrarOrdenarProdutosPorPreco(30);
const produtosMedios = filtrarOrdenarProdutosPorPreco(50);
const produtosCaros = filtrarOrdenarProdutosPorPreco(100);

console.log(produtosBaratos);
console.log(produtosMedios);
console.log(produtosCaros);