import { cardapio } from "../cardapio.js";

export function calcularSubtotal(itens) {
    return itens.reduce((subtotal, item) => {
        const quantidade = parseInt(item[1]);
        const pedido = cardapio.find(pedido => pedido.codigo === item[0]);
        return subtotal + pedido.valor * quantidade;
    }, 0);
}