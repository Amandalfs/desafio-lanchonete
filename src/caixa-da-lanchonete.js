import { ValidarFormaDePagamento } from "./validadores/validarFormaDePagamento.js";
import { MascaraDinheiro } from "./utilidades/mascaraDinheiro.js";
import { DividirItensPorVirgula } from "./utilidades/dividirItensPorVirgula.js";
import { Pagamento } from "./utilidades/pagamento.js";
import { Carrinho } from "./validadores/carrinho.js";
import { cardapio } from "./cardapio.js";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const listaItens = new DividirItensPorVirgula(itens).formatar()

        const carrinho = new Carrinho(listaItens)

        if (!new ValidarFormaDePagamento(metodoDePagamento).validar()) return "Forma de pagamento inválida!";

        if (carrinho.itemsNoCarrinho()) return "Não há itens no carrinho de compra!";

        if (carrinho.temQuantidadeInvalida()) return "Quantidade inválida!";

        if (!carrinho.validarItemExiste(cardapio)) return "Item inválido!";

        if (carrinho.temExtraSemPrincipal(cardapio)) return "Item extra não pode ser pedido sem o principal";

        const total = new Pagamento(listaItens, metodoDePagamento)

        return new MascaraDinheiro().formatar(total.aplicarDesconto());
    }
}

export { CaixaDaLanchonete };