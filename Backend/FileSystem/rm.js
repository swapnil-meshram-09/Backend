import { rm } from 'fs'

rm('FileSystem/Files/file2.txt', ()=>{
    console.log('Remove file');
})