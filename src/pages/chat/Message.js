import React from 'react'

export default function Message({message}) {
  return (
    <div className='justify-self-start p-2 lg:p-4 max-w-[80%] lg:max-w-[60%] rounded-lg bg-gray-300'>
        <p className='text-lg'>{message}</p> 
    </div>
  )
}
