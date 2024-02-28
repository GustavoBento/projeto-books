const btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdernados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdernados)
}