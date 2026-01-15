const asyncHandler = (requestHandler) =>{

}





// const asyncHandler = (fn) => async (req,res,next) => {
//     try{
//         await fn(req,res,next)

//     }catch(error){
//         // console.log(error);
//         res.status(error.code || 500).json({
//             sucees: false,
//             message: error.message
//         })
//     }
// }

export { asyncHandler }