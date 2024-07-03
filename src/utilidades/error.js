export class ErrorDomain extends Error {
    domain = true
    constructor(error){
        super(error)
    }
}
