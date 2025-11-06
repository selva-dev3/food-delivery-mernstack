import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()


const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    console.log('asdasd',req.url)
    if(!token){
        return res.json({success: false , message: "Not Authorized Login Again"})
    }
    try{
        console.log('jwt',process.env.JWT_SECRET)
        const token_decode = jwt.verify(token,process.env.JWT_SECRET,{complete: true});
        console.log(token_decode)
     
        req.body.userId =token_decode.payload.id;
        // req.body = {userId: token_decode.payload.id}
     
        next();
    }catch(error){
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

export default authMiddleware;