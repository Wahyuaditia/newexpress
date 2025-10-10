const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(
        "mongodb+srv://Wahyuaditia:wahyu280205@cluster0.rjw28qt.mongodb.net/SI5PAW2?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected.");
    } catch (error) {
        console.error("error : ",error);
        procces.exit(1);
    }
}

module.exports = connectDB;