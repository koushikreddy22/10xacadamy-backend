const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:{
        type:String
    },
    classid:{
        type:Number
    }
   
})
mongoose.model("student",studentSchema)