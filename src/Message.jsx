import { Card, CardContent, Typography } from '@mui/material'
import React, { forwardRef } from 'react'

import './Message.css'

const Message = forwardRef(({message, username}, ref)=> {
  const isUser = username === message.username
  return (

<div ref={ref} className={`message ${isUser && 'message_user'} `}>
<Card className={isUser ? "message_userCard" : "message_guestCard"}>
 <CardContent>
  <Typography color="black" variant='h5' component='h2' fontFamily='Montserrat'>
  {!isUser && `${message.username || 'Unkown User:'}`} {message.text}
  </Typography>
 </CardContent>
    </Card>
</div>
 
  )
}
)

export default Message
