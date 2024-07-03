import { Carrinho } from "./carrinho.js";

class CaixaDaLanchonete {
    metodosDePagamentosValidos = ['credito', 'dinheiro', 'debito']
    calcularValorDaCompra(metodoDePagamento, itensNaoFormatado){
        try {
            if(!this.metodoDePagamentoEvalido(metodoDePagamento)){
                return 'Forma de pagamento inválida!'
            }
    
            if(itensNaoFormatado.length <= 0){
                return 'Não há itens no carrinho de compra!'
            }
    
            const carrinho = new Carrinho(itensNaoFormatado)
            let total = carrinho.calcularTotal();
            const descontoDinheiro = 0.05
            const acrescimoCredito = 0.03
    
            if(metodoDePagamento === 'dinheiro'){
                total -= total * descontoDinheiro
            } else if(metodoDePagamento === 'credito') {
                total += total * acrescimoCredito
            }
      
            return `R$ ${total.toFixed(2).replace('.', ',')}`
        } catch (error) {
            if(error.domain){
                return error.message
            }
        }
   
    }

    metodoDePagamentoEvalido(metodoDePagamento){
        return this.metodosDePagamentosValidos.includes(metodoDePagamento)
    }
}

const caixa = new CaixaDaLanchonete()
console.log(caixa.calcularValorDaCompra('credito', ['chantily, 1', 'cafe, 1']))

export { CaixaDaLanchonete };