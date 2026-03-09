import { rmdir } from 'fs'

rmdir('FileSystem/Files3', ()=>{
    console.log('remove empty folder');
})