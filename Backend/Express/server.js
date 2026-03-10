import { express } from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.end('Server started.')
})

app.listen(3000)