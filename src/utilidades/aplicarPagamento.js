export function aplicarPagamento(subtotal, metodoDePagamento){
    if (metodoDePagamento === 'dinheiro') {
        return (subtotal * 0.95).toFixed(2);
    } else if (metodoDePagamento === 'credito') {
        return (subtotal * 1.03).toFixed(2);
    }
    
    return subtotal.toFixed(2);
}