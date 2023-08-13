export function temQuantidadeInvalida(itens) {
    return itens.some(item => item[1] <= 0);
}