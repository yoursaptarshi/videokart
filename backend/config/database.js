const mongoose = require('mongoose');
exports.connectDB = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        console.info(`MongoDB connected with ${connection.host}:${connection.port}`)
    } catch (error) {
        console.error(`MongoDB connection failed: ${error}`)
    }
}