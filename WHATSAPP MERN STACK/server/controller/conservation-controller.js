import Conservation from '../model/Conservation.js'

export const newConservation=async(request,response)=>{
    try{
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;
        const exist= await Conservation.findOne({members:{$all:[receiverId,senderId]}})

        if(exist){
            return response.status(200).json('Conservation already exist')
        }

        const newConservation=new Conservation({
            members:[senderId,receiverId]
        })
        await newConservation.save();
        return response.status(200).json('Conservation saved succcessfully')
    }catch(error){
        return response.status(500).json(error.message)
    }
}

export const getConservation=async (request,response)=>{
    try{ 
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;
        let conservation=await Conservation.findOne({members:{$all:[receiverId,senderId]}});
        return response.status(200).json(conservation);
    }catch(error){
        return response.status(500).json(error.message);
    }
}