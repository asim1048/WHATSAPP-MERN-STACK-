import mongoose from 'mongoose';

const MessageScheme=new mongoose.Schema({
    conservationId:{
        type:String
    },
    senderId:{
        type:String
    },
    receiverId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }
},
{
    timestamps:true
})

const message= mongoose.model('Message',MessageScheme);
export default message;