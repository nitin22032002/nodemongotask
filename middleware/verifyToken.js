const jwt=require("jsonwebtoken")
const {keys} =require("./keys")
const verifyToken=(req,res,next)=>{
    try{
        if(jwt.verify(req.header('auth-token'),keys)){
            next()
        }
        else{
            res.status(401).json({msg:"Invalid User..."})
        }
    }
    catch(e){
        return res.status(401).json({msg:"Invalid User..."})
    }
}

module.exports=verifyToken;