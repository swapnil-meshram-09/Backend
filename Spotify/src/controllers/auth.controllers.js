export async function registerUser(req, res){
    const { username, email, password } = req.body

    if(!username && !password){
        return res.status(409).json({
            message: 'Username & password, both are required.'
        })
    }

    if(!username || !password){
        return res.status(409).json({
            message: 'Username or password is required.'
        })
    }

    console.log('hello');
    
}