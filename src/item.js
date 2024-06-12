export class Item{
    preco = 0
    quantidade = 0
    total = 0

    constructor({preco, quantidade}){
        this.preco = preco
        this.quantidade = quantidade
        this.total = preco * quantidade
    }
}