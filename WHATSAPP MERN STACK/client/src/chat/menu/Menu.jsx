import React,{useState} from 'react'
import {Box} from '@mui/material'

import Header from './Header'
import Search from './Search'
import Conservations from './Conservations'
export default function Menu() {
  const [text,setText]=useState('')
  return (
    <Box>
        <Header/>
        <Search setText={setText}/>
        
        <Conservations text={text}/>
    </Box>
  )
}
