class apiError extends Error{
    constructor(
        statusCode,
        message = 'something went wrong',
        error = [],
        stack = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.success = false
        this.error = this.error

        if(stack){
            this.stack = stack
        } else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}


export { apiError }