import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


const Connection=async ()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-ppl6iie-shard-00-00.u5ctnad.mongodb.net:27017,ac-ppl6iie-shard-00-01.u5ctnad.mongodb.net:27017,ac-ppl6iie-shard-00-02.u5ctnad.mongodb.net:27017/?ssl=true&replicaSet=atlas-5ond79-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true});
       console.log("Database connected successfully");
    }catch (error){
       console.log("Error while connnecting the database ",error.message);
    }
}

export default  Connection;