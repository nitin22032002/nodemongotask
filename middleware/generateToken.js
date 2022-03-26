const jwt=require("jsonwebtoken")
const {keys}=require("./keys")
const generateToken=(data)=>{
    let token=jwt.sign({data},keys)
    return token;
}

module.exports=generateToken