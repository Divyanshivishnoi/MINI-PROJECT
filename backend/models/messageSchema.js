
import mongoose   from "mongoose";

const messageSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minLength:[3,"Name must contain at least 3 characters"],    

    },
    email:{
        type:String,
        required:[true,"email is required"],
        validate:[validator.isEmail,"Please enter a valid email address"],
       
    },
    subject:{
        type:String,
        required:[true,"Subject is required"],
        minLength:[5,"Subject must contain at least 5 characters"],    

    },
    message:{
        type:String,
        required:[true,"email is required"],
        minLength:[10,"Subject must contain at least 10 characters"],    
    },
    });

    export const Message=mongoose.model("Message",messageSchema);