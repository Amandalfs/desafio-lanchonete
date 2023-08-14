export class MascaraDinheiro {
    formatar(valor) {
        return `R$ ${valor.replace('.', ',')}`;
    }
}