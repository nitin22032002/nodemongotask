const {Schema,model}=require("mongoose")
 
const userSchema=new Schema({
    "name":{
        type:String,
        required:true
    },
    "age":{
        type:Number,
        required:true
    }
})
const user=model("Users",userSchema)
user.createIndexes()
module.exports=user;