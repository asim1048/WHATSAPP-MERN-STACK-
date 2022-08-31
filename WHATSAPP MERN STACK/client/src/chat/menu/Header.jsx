import React,{useContext,useState} from 'react'
import {Box,styled} from '@mui/material'
import {Chat as MessageIcon} from '@mui/icons-material'
import { AccountContext } from '../../context/AccountProvider';

import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component=styled(Box)`
  height:44px;
  padding:8px 16px;
  background:#ededed;
  display:flex;
  align-items:center;
`
const Wrapper=styled(Box)`
   margin-left:auto;
   & > * { //For child 
    margin-left:2px;
    padding:8px;
    color:black;
   }
   & : first-child{
    font-size:22px;
    margin-right:8px;
    margin-top:3px;
   }
`
const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50%'
})
export default function Header() {

  const [openDrawer,setOpenDrawer]=useState(false)
  const {account}=useContext(AccountContext)

  const toggleDrawer=()=>{
    setOpenDrawer(true)
  }

  return (
    <>
    <Component>
        <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()}/>

        <Wrapper>
            <MessageIcon/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
        </Wrapper> 
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </Component>
    </>
  )
}
