export function validarFormaDePagamento(metodoDePagamento) {
    const formasDePagamentoDisponiveis = ['credito', 'debito', 'dinheiro'];
    return formasDePagamentoDisponiveis.includes(metodoDePagamento);
}