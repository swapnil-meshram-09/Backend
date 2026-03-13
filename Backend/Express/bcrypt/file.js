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


const hashed = '$2b$10$n.dYV1OI9p/J7eX1XKM5mux5MkknM31kkVyKW76VIXl3C7wFSkkMm'

app.get('/verify', async (req, res) =>{
    const result = await bcrypt.compare(data, hashed)
    console.log(result);
    
    res.send('Done 2')
})

app.listen(3000)