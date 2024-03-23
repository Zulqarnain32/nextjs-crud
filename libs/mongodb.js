import mongoose from "mongoose";
const connectMongoDB = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/crudcrud")
        console.log("connected successfully....");
    } catch(err){
        console.log("not connected");
    }
}
export default connectMongoDB