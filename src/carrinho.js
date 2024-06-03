import { cardapio } from "./cardapio.js"
import { Item } from "./item.js"

export class Carrinho{
    itens = []

    constructor(itens){
        itens.map((item)=> {
            const [codigo, quantidade] = item.split(',')

            const { valor } = cardapio.find(itemDoCardapio =>{
                if(itemDoCardapio.codigo === codigo){
                   return itemDoCardapio
                }
            }) 
            const produto = new Item(codigo, quantidade, valor)
            this.itens.push(produto)
        })
    }

    calcularValorTotal(){
        return this.itens.reduce((totalDoCarrinho,item)=>{
            const total = item.preco * item.quantidade;
            return totalDoCarrinho + total;
        }, 0) 
    }

    
}