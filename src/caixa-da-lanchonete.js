import { validarFormaDePagamento } from "./validadores/validarFormaDePagamento.js";
import { temExtraSemPrincipal } from "./validadores/temExtraSemPrincipal.js";
import { validarItemExiste } from "./validadores/validarItemExiste.js";
import { temQuantidadeInvalida } from "./validadores/temQuantidadeInvalida.js";
import { calcularSubtotal } from "./utilidades/calcularSubtotal.js";
import { itemsNoCarrinho } from "./validadores/itemsNoCarrinho.js";
import { aplicarPagamento } from "./utilidades/aplicarPagamento.js";
import { mascaraDinheiro } from "./utilidades/mascaraDinheiro.js";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const listaItens = itens.map(item => item.split(','));

        if (!validarFormaDePagamento(metodoDePagamento)) return "Forma de pagamento inválida!";

        if (itemsNoCarrinho(listaItens)) return "Não há itens no carrinho de compra!";

        if (temQuantidadeInvalida(listaItens)) return "Quantidade inválida!";

        if (!validarItemExiste(listaItens)) return "Item inválido!";

        if (temExtraSemPrincipal(listaItens)) return "Item extra não pode ser pedido sem o principal";

        const subtotal = calcularSubtotal(listaItens);

        const total = aplicarPagamento(subtotal, metodoDePagamento)
    
        return mascaraDinheiro(total);
    }
}

export { CaixaDaLanchonete };