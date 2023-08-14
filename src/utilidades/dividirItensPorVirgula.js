export class DividirItensPorVirgula{
    constructor(itens){
        this.itens = itens
    }

    formatar(){
        return this.itens.map(item => item.split(','));
    }
}