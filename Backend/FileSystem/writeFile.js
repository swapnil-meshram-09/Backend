import fs from 'fs'

fs.writeFile('file.txt', 'file contains content', ()=>{
    return console.log('File created.');
})