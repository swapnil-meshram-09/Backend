// import fs from 'fs'

// fs.appendFile('FileSystem/Files/file.txt', ' Appended data in existing file', ()=>{
//     console.log('Data Append');
// })


import { appendFile } from 'fs'

appendFile('FileSystem/Files/file.txt', ' new data append in file.', ()=>{
    console.log('Data Append');
})