import app from './src/app.js'
import connectDB from './src/db/db.js';
import config from './src/configs/config.js'

connectDB()

app.listen(config.PORT, () =>{
    console.log(`http://localhost:${config.PORT}`);
})