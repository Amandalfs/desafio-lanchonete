export class Carrinho {
    constructor(itens){
        this.itens = itens
    }

    itemsNoCarrinho(){
        return this.itens.length === 0
    }

    temQuantidadeInvalida() {
        return this.itens.some(item => item[1] <= 0);
    }

    validarItemExiste(cardapio) {
        return this.itens.every(item =>
            cardapio.some(pedido => pedido.codigo === item[0])
        );
    }

    temExtraSemPrincipal(cardapio) {
        const items = this.itens.map(itens =>
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
}