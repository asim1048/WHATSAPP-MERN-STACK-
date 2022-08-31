import React,{useContext,useEffect,useState} from 'react'
import { Box } from '@mui/material'
import { AccountContext } from '../../context/AccountProvider'

import {getConservation} from '../../service/api'

import ChatHeader from './ChatHeader'
import Messages from './Messages'
export default function ChatBox() {
  const{person,account}=useContext(AccountContext)
  const [conservation,setConservation]=useState({});

  useEffect(()=>{
    const getConservationDetails=async ()=>{
      let data = await getConservation({senderId:account.sub,receiverId:person.sub})
      console.log(data);
      setConservation(data);
    }
    getConservationDetails();
  },[person.sub])
  return (
    <Box>
        <ChatHeader person={person}/>
        <Messages person={person} conservation={conservation}/>
    </Box>

  )
}
