import React from 'react'
import Message from './Message'
import Input from './Input'

export default function MessageBox() {
  return (
    <div className='grid grid-cols-1 items-center gap-4 px-4 lg:px-12 '>

        <Message />
        <Input />
        <Message />
        <Input />
        <Message />
        <Input />



        

    </div>
  )
}
