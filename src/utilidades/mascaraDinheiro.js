export class MascaraDinheiro {
    constructor(valor){
        this.valor = valor
    }

    formatar() {
        return `R$ ${this.valor.replace('.', ',')}`;
    }
}