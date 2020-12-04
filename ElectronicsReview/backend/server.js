import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from  './routes/userRoute';

dotenv.config();

const mongodbUrl=config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).catch(error=>console.log(error.reason));



const app=express();
app.use("/api/users",userRoute);
app.get("/api/products",(req,res)=>{

    res.send(data.products);
})

app.listen(5000,function(){
    console.log("Server running at http://localhost:5000")
})