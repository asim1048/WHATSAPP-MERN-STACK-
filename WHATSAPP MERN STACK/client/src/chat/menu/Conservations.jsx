import React,{useEffect,useState,useContext} from 'react'
import {Box, styled,Divider} from '@mui/material'
import { getUsers } from '../../service/api'
import Conservation from './Conservation'

import {AccountContext} from '../../context/AccountProvider'

const Component=styled(Box)`
  height:78vh;
  overFlow:overlay;
`
const StyledDivider=styled(Divider)`
  margin: 0 0 0 70px;
  background-color:#e9edef;
  opacity:0.3;
`
export default function Conservations({text}) {
  const [users,setUsers]=useState([])

  const {account} = useContext(AccountContext);

  useEffect(()=>{
    const FetchData=async ()=>{
      let response=await getUsers();
      const filterData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(filterData);
    }
    FetchData();
  },[text])
  return (
    <Component>
      { users.map(user =>(
          user.sub!==account.sub &&
          <>      
            <Conservation user={user}/>
            <StyledDivider/>
          </>
      ))}
    </Component>
  )
}
