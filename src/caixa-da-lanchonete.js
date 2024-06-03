import { Carrinho } from "./carrinho.js";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const descontoComDinheiro = 0.05;
        const crescimoComCredito = 0.03;

        const carrinho = new Carrinho(itens)
        let totalDaCompra =  carrinho.calcularValorTotal()

        if(metodoDePagamento === 'dinheiro'){
            return totalDaCompra -= totalDaCompra * descontoComDinheiro;
        } else if(metodoDePagamento === 'credito'){
            return totalDaCompra += totalDaCompra * crescimoComCredito;
        }
        
        return totalDaCompra;
    }


}

const caixa = new CaixaDaLanchonete()
console.log(caixa.calcularValorDaCompra('dinheiro', ['sanduiche,1', 'cafe,1']))

export { CaixaDaLanchonete };