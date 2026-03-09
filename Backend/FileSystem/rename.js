import { rename } from "fs";

rename('FileSystem/Files/file.txt', 'File.txt', ()=>{
    console.log('Rename the file.');
})