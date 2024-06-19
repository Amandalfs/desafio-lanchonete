export class UnprocessableError extends Error {
    errorCoencido = true
    constructor(error){
        super(error)
    }
}