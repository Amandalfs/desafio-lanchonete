export class ValidarFormaDePagamento {
    constructor(metodoDePagamento){
        this.metodoDePagamento = metodoDePagamento
    }

    validar(){
        const formasDePagamentoDisponiveis = ['credito', 'debito', 'dinheiro'];
        return formasDePagamentoDisponiveis.includes(this.metodoDePagamento);
    }
}