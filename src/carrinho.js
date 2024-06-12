import { cardapio } from "./cardapio.js"
import { Item } from "./item.js"

export class Carrinho {
    itens = []
    constructor(itensParamentro){
        itensParamentro.map((objetoDeItem)=>{
            const [codigo, quantidade] = objetoDeItem.split(",")
            const produtoAchado = cardapio.find((produtoCarpadio)=> {
                if(produtoCarpadio.codigo === codigo){
                    return produtoCarpadio
                }
            })
            const item = new Item({preco: produtoAchado.valor, quantidade })
            this.itens.push(item)
        })
    }

    calcularTotalDoCarrinho(){
        const total = this.itens.reduce((acumulador, valorAtual)=>{
            return acumulador + valorAtual.total
        }, 0)
        return total
    }
}
