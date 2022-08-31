import Message from '../model/Message.js';
import Conservation from '../model/Conservation.js'

export const newMessage=async(request,response)=>{
    try{
        const newMessage=new Message(request.body);
        await newMessage.save();
        
        await Conservation.findByIdAndUpdate(request.body.conservationId,{message:request.body.text});

        return response.status(200).json('Message has been sent successfully');
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const getMessages= async (request,response)=>{
    try{
        const messages= await Message.find({ conservationId: request.params.id });
        return response.status(200).json(messages);
    }catch(error){
        return response.status(500).json(error.message);  

    }
}