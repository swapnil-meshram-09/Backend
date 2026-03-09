import { rename } from 'fs'

rename('FileSystem/Files/file.txt', 'FileSystem/Files/File.txt', ()=>{
    console.log('Rename the file.');
})