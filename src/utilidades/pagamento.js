import { cardapio } from "../cardapio.js";

export class Pagamento {
    constructor(itens, metodoDePagamento) {
        this.itens = itens;
        this.metodoDePagamento = metodoDePagamento;
    }

    calcularSubtotal() {
        return this.itens.reduce((subtotal, item) => {
            const quantidade = parseInt(item[1]);
            const pedido = cardapio.find(pedido => pedido.codigo === item[0]);
            return subtotal + pedido.valor * quantidade;
        }, 0);
    }

    aplicarDesconto(){
        const subtotal = this.calcularSubtotal();

        if (this.metodoDePagamento === 'dinheiro') {
            return (subtotal * 0.95).toFixed(2);
        } else if (this.metodoDePagamento === 'credito') {
            return (subtotal * 1.03).toFixed(2);
        }
        
        return subtotal.toFixed(2);
    }
}