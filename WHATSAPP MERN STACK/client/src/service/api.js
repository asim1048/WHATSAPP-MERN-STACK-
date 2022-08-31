import axios from "axios";

const url='http://localhost:8000';
export const adduser = async (data)=>{
   try{
      await axios.post(`${url}/add`,data);
   }catch (error){
    console.log('Error while addUser API ',error.message)
   }
}

export const getUsers=async()=>{
   try{
      let response=await axios.get(`${url}/users`);
      return response.data;
   }catch(error){
      console.log("Error while getUsers API ",error.message);
   }
}

export const setConservation=async(data)=>{
   try{
      await axios.post(`${url}/conservation/add`,data);
   }catch(error){
      console.log("Error while setConservation API ",error.message);
   }
}
export const getConservation=async(data)=>{
   try{
      let response=await axios.post(`${url}/conservation/get`,data);
      return response.data;
   }catch(error){
      console.log("Error while getConservation API ",error.message);
   }
}
export const newMessage=async(data)=>{
   try{
      await axios.post(`${url}/message/add`,data);
   }catch(error){
      console.log("Error while newMessage API",error.message)
   }
}

export const getMessages=async(id)=>{
   try{
      let response=await axios.get(`${url}/message/get/${id}`);
      return response.data;
   }catch(error){
      console.log("Error while getMessages API",error.message)
   }
}

export const UploadFile=async(data)=>{
   try{
      return await axios.post(`${url}/file/upload`,data);
   }catch(error){
      console.log("Error while Upload API",error.message)
   }
}