import fs from 'fs'

fs.writeFile('file.txt', 'file contains content', ()=>{
    if(error) return console.log(error.message);
    return console.log('File created.');
})