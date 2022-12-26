const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Student=mongoose.model("student")
router.get('/allstudents',(req,res)=>{
    Student.find().then(student=>{
        res.json({student})
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/create',(req,res)=>{
    const {name,classid}=req.body
    const student= new Student({
       name,
       classid
    })
    student.save().then(result=>{
        res.json({student:result})
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = router