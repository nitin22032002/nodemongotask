const mongoose=require("mongoose")
const {uri}=require("../middleware/keys")
mongoose.connect(
    uri
).then(()=>{
    console.log("connected...")
}).catch((e)=>{
    console.log(e)
})

module.exports=mongoose
