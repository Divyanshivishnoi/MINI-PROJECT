
import mongoose from 'mongoose';
export const dbConnection=()=>{
    mongoose
    .connect(
        {dbName:"merndb"}
    )
    .then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log("some error occured while connecting to database",err);
    });
};





