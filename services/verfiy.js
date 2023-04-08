import jwt from 'jsonwebtoken';
export const verify = (request,response,next)=>{
    let token = request.headers.authorization;
    try{
        if(!token)
            throw new Error();
        token =token.split(" ")[0];
        jwt.verify(token,"dssfdgdfgfsds");
        next();
    }
    catch(err){
        return response.status(400).json({Message:"Bad request",status:false});
    }
}