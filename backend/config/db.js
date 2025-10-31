import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://selvam:Selvam152000@cluster0.ruzep37.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));



}

