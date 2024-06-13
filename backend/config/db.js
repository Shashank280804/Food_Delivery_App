import mongoose from "mongoose";

export const connectDb = async () => {

        await mongoose.connect('mongodb+srv://shashankpatil:Shashankpatil@cluster0.pcyqr94.mongodb.net/food_Delivery?retryWrites=true&w=majority').then(()=>console.log("DB Connected"))
}
