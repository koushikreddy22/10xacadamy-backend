const express=require('express')
const mongoose=require('mongoose')
const app= express()
require('./models/student')
app.use(express.json())
const PORT=4000
const mongourl="mongodb+srv://koushik:Mn1MrKr1L45@cluster0.8okg6cb.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongourl)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})
app.use(require("./routes/student"))


app.listen(PORT,()=>{console.log(`The server is running on port ${PORT}`)})