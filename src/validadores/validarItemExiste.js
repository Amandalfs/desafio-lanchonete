import { cardapio } from "../cardapio.js";

export function validarItemExiste(itens) {
    return itens.every(item =>
        cardapio.some(pedido => pedido.codigo === item[0])
    );
}