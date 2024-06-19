import { cardapio } from "./cardapio.js"
import { Item } from "./item.js"
import { UnprocessableError } from "./utilidades/unprocessableError.js"

export class Carrinho {
    itens = []
    principal = []
    extra = []
    constructor(itensParamentro){
        if(itensParamentro.length <= 0){
            throw new UnprocessableError('Não há itens no carrinho de compra!')
        }
        
        itensParamentro.map((objetoDeItem)=>{
            if(!objetoDeItem.includes(',')){
                throw new UnprocessableError('Item inválido!')
            }
            
            const [codigo, quantidade] = objetoDeItem.split(",")

            if(quantidade <= 0){
                throw new UnprocessableError('Quantidade inválida!')
            }

            const produtoAchado = cardapio.find((produtoCarpadio)=> {
                if(produtoCarpadio.codigo === codigo){
                    return produtoCarpadio
                }
            })

            if(!produtoAchado){
                throw new UnprocessableError('Item inválido!')
            }
            
            const item = new Item({preco: produtoAchado.valor, quantidade })

            if(produtoAchado.descricao.includes("extra")){
                this.extra.push(produtoAchado)
            } else {
                this.principal.push(produtoAchado)
            }

            this.itens.push(item)
        })

        if(this.existeExtraSemCafe()){
            throw new UnprocessableError('Item extra não pode ser pedido sem o principal')
        }
    }

    calcularTotalDoCarrinho(){
        const total = this.itens.reduce((acumulador, valorAtual)=>{
            return acumulador + valorAtual.total
        }, 0)
        return total
    }

    existeExtraSemCafe(){
        if(this.extra.length > 0){
            return !(this.extra.every((produtoExtra)=>{
                return this.principal.some((produtoPrincipal)=>{
                    if(produtoPrincipal.extra === produtoExtra.codigo){
                        return true
                    } else {
                        return false
                    }
                }) 
            }))
        }
    }
}
