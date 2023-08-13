export function mascaraDinheiro(valor){
    return `R$ ${valor.replace('.', ',')}`
}