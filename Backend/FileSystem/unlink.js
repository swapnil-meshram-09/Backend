import { unlink } from 'fs'

unlink('FileSystem/Files/File2.txt', ()=>{
    console.log('File deleted');
})