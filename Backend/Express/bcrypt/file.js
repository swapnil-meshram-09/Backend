import express from 'express'
import bcrypt from 'bcrypt'

const app = express()

const data = 'password'

app.get('/', async (req, res) =>{
    const salt = await bcrypt.genSalt(10, async (err, salt) =>{
        const hashed = await bcrypt.hash(data, salt, (err, hash) =>{
            // console.log(salt);
            console.log(hash);
        })
    })
    res.send('Done')
})

app.get('/verify', async (req, res) =>{
    const result = await bcrypt.compare('$2b$10$mYZCLWCMBBSDuz5WrIFOTOsQ8NvXYyT0NG.wynpyEilFucrNAzzYu', 'password')
    console.log(result);
    
    res.send('Done 2')
})

app.listen(3000)