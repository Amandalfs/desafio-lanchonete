import { cardapio } from "../cardapio.js";

export function temExtraSemPrincipal(itens) {
    const items = itens.map(itens =>
        cardapio.find(item => item.codigo === itens[0])
    );

    const principais = items.filter(item => item.extra === null);
    const extras = items.filter(item => item.extra !== null);

    if (principais.length === 0 && extras.length > 0) {
        return false;
    }

    for (const extra of extras) {
        if (items.some(item => item.codigo === extra.extra)) {
            return false;
        }
    }

    return true
}