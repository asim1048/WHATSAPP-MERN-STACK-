import React, { useContext } from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material'

import { AccountContext } from '../context/AccountProvider'

import LoginDialog from '../account/LoginDialog'
import ChatDialog from '../chat/ChatDIalog'

const Component = styled(Box)` //Box is just like div but material Ui which provide more 
  height:100vh;
  background-color:#DCDCDC
`
const Header = styled(AppBar)`
  height:125px;
  background-color:#00A884;
  box-shadow:none
`
const LoginHeader = styled(AppBar)`
  height:220px;
  background-color:#00bfa5;
  box-shadow:none
`
export default function Messenger() {
  const { account } = useContext(AccountContext)
  return (
    <Component>
      {
        account ?
          <>
            <Header>
              <Toolbar>

              </Toolbar>
            </Header>
            <ChatDialog />
          </>
          :
          <>
            <LoginHeader>
              <Toolbar>

              </Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
      }
    </Component>
  )
}
