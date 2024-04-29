const express=require('express')
const app=express()
const mongoose=require('mongoose')
const multer=require('multer')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const cookieParser=require('cookie-parser')
const cors=require('cors')
//database
const connectDB=async()=>{
    try{

        await mongoose.connect("mongodb+srv://sreeparna0410:sreeparnadev@cluster0.anx47aq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database is connected successfully")
    }
    catch(err){
        console.log(err)
    }

}

//middleware
app.use(express.json())
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)


//image upload

const storage=multer.diskStorage({

    destination:(req,file,fn)=>{
        fn(null,"images")

    },
    filename:(req,file,fn)=>{
       fn(null,req.body.img)
        //fn(null,"image2.jpg")
    }
})
const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Image uploaded successfully")


})


app.listen (3200,()=>{
    connectDB()   
    console.log("app is working on port 3200")

})