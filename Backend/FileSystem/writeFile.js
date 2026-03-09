// import fs from 'fs'

// fs.writeFile('file.txt', 'file contains content', ()=>{
//     return console.log('File created.');
// })

import { writeFile } from 'fs'

writeFile('FileSystem/Files/file.txt', 'File added with content.', ()=>{
    console.log('File created.');
})