import { log } from "node:console"

const asyncHandler = () => async (req,res,next) => {
    try{

    }catch(error){
        console.log(error);
        
    }
}

export { asyncHandler }