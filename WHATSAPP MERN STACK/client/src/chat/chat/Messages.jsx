import React,{useContext,useState,useEffect,useRef} from 'react'
import {Box,styled} from '@mui/material'
import Footer from './Footer'

import {AccountContext} from '../../context/AccountProvider'

import {newMessage,getMessages} from '../../service/api'
import Message from './Message'

const Wrapper= styled(Box)`
  background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
  background-size:'50%';
`
const Component=styled(Box)`
  height:79vh;
  overFlow-y:scroll;
`
const Container=styled(Box)`
  padding:1px 80px;
`
export default function Messages({person,conservation}) {

  const [value,setValue]=useState('')
  const {account}=useContext(AccountContext);
  const [messages,setMessages]=useState([]);
  const [newMessageFlag,setNewMessageFlag]=useState(false);
  const[file,setFile]=useState()
  const [image,setImage]=useState('')

  const scrollRef=useRef();

  useEffect(()=>{
    const getMessageDetails=async()=>{
      let data=await getMessages(conservation._id);
      setMessages(data);
    }
    conservation._id && getMessageDetails();
  },[person._id,conservation._id,newMessageFlag])


   useEffect(()=>{
    scrollRef.current?.scrollIntoView({ transition: "smooth"});
  },[messages])

  const sendText=async(e)=>{
    //console.log(e);
    const code= e.keyCode || e.which;
    if(code===13){
      let message={};
      if(!file){
        message={
          senderId:account.sub,
          receiverId:person.sub,
          conservationId:conservation._id,
          type:'text',
          text:value
        }
      }else{
        message={
          senderId:account.sub,
          receiverId:person.sub,
          conservationId:conservation._id,
          type:'file',
          text:image
        }
      }
      if(message.text!==''){
        await newMessage(message);
      }

      setValue('');
      setFile('');
      setImage('');
      setNewMessageFlag(prev=>!prev)
    }

  }
  return (
    <Wrapper>
        <Component>
          {
            messages && messages.map(message=>(
              <Container ref={scrollRef}>
                <Message message={message}/>
              </Container>
            ))
          }
        </Component>
        <Footer 
           sendText={sendText}  setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage}

        />
    </Wrapper>
  )
}
