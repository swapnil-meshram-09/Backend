import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'     // file read, write, remove = file system inbulit in node

cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_NAME, 
  api_key: process.env.CLOUDNARY_API_KEY, 
  api_secret: process.env.CLOUDNARY_API_SECRET
});


cloudinary.uploader
  .upload("my_image.jpg")
  .then(result=>console.log(result));


