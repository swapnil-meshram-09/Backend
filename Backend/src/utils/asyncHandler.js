import { log } from "node:console"

const asyncHandler = () => async (req,res,next) => {
    try{

    }catch(error){
        // console.log(error);
        res.status(error.code || 500).json({
            sucees: false,
            message: error.message
        })
    }
}

export { asyncHandler }