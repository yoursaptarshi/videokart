const app = require('./app');
const{connectDB} = require('./config/database');
const cloudinary = require("cloudinary") ;
const RazorPay = require("razorpay") ;
const nodeCron = require("node-cron") ;

connectDB();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
})

exports.instance = new RazorPay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET
})


app.listen(process.env.PORT,()=>{
    console.info(`server is working on port : ${process.env.PORT}`)
})