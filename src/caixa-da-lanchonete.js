import { Carrinho } from './carrinho.js';
import { UnprocessableError } from './utilidades/unprocessableError.js';
class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {

        try {
            const carrinho = new Carrinho(itens)
            let total = carrinho.calcularTotalDoCarrinho()
            const descontoDinheiro = 0.05
            const acrescimoCredito = 0.03
            
            if(
                metodoDePagamento !== 'dinheiro' 
                && metodoDePagamento !== 'debito' 
                && metodoDePagamento !== 'credito'
            ){
                throw new UnprocessableError('Forma de pagamento inválida!')
            }

            if(metodoDePagamento === 'dinheiro'){
                total -= total * descontoDinheiro
            } else if(metodoDePagamento === 'credito') {
                total += total * acrescimoCredito
            }
            
            return `R$ ${total.toFixed(2).replace('.', ',')}`
            
        
        } catch (error) {
            if(error.errorCoencido){
                return error.message
            }
        }
        
    }


}

const caixa = new CaixaDaLanchonete()
// console.log(caixa.calcularValorDaCompra('credito', ['sanduiche,1', 'cafe,1', 'chantily, 3']))

export { CaixaDaLanchonete };