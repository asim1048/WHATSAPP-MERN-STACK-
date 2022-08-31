import mongoose from 'mongoose'

const ConservationSchema=new mongoose.Schema({
    members:{
        type:Array
    },
    message:{
        type:String
    }},
    {
        timestamps:true,
    }
);

const conservation=mongoose.model('Conservation',ConservationSchema)
export default conservation;