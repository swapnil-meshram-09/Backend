import { rmdir } from 'fs'

rmdir('FileSystem/Files2', {recursive: true}, ()=>{
    console.log('Remove folder');
})