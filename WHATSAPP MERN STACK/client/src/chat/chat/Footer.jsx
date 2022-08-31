import React,{useEffect} from 'react'
import { Box, styled, InputBase } from '@mui/material'
import { EmojiEmotionsOutlined, AttachFile, Mic, } from '@mui/icons-material';
import {UploadFile} from '../../service/api'
const Container = styled(Box)`
  height:100%;
  background:#ededed;
  display:flex;
  width:96.5%;
  align-items:center;
  padding:0 15px;
  & > * {
    margin:5px;
    color:#919191
  }
`
const Search = styled(Box)`
  background-color:#FFFFFF;
  border-radius:18px;
  width:calc(96.5% - 100px)
`
const InputFied = styled(InputBase)`
  width:100%;
  padding:17px;  
  height:20px;
  padding-left:25pxl;
  font-size:16px;
`
const ClipIcon = styled(AttachFile)`
  transform:rotate(40deg)
`
export default function Footer({ sendText, setValue, value,file,setFile,setImage }) {

  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response= await UploadFile(data);
        setImage(response.data);
        //console.log(response.data)
      }
    }
    getImage();
  },[file])

  const onFileChane=(e)=>{
    //console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor='fileInput'>
        <ClipIcon />
      </label>
      <input 
      type="file" 
      id='fileInput'
      style={{display:'none'}}
      onChange={(e)=>onFileChane(e)}
      />
      <Search>
        <InputFied
          placeholder='Type a message'
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  )
}
