import { Carrinho } from './carrinho.js';
class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const carrinho = new Carrinho(itens)
        let total = carrinho.calcularTotalDoCarrinho()
        const descontoDinheiro = 0.05
        const acrescimoCredito = 0.03
        if(metodoDePagamento === 'dinheiro'){
            return `R$ ${total -= total * descontoDinheiro}`
        } else if (metodoDePagamento === 'credito'){
            return `R$ ${total += total * acrescimoCredito}`
        }
    }


}

const caixa = new CaixaDaLanchonete()
console.log(caixa.calcularValorDaCompra('credito', ['sanduiche,1', 'cafe,1']))

export { CaixaDaLanchonete };