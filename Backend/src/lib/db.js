import moongose from "mongoose";

export const connectDB =async() => {
    try{
        const conn =await moongose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log("MongoDB Connection error:",error);
    }
};