import express from 'express'

const app = express()

app.get('/', (req, res) =>{

    res.send('server is started.')

    // console.log('Server is started.')
})


const port = process.env.PORT || 3000;

// const port = 3000;

app.listen(port, () =>{

    console.log(`Serve at http://localhost:${port}`);
})
