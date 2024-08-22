import React from 'react'
import Message from './Message'
import Input from './Input'
import Response from './Response'
import Service from './ServicePicker'
import Date from './DatePicker'
import TimePicker from './TimePicker'
import ConfirmButton from './ConfirmButton'
import Reminder from './Reminder'


export default function MessageBox() {
  return (
    <div className='grid grid-cols-1 items-center gap-4 px-4 lg:px-12 pb-[120px]'>

        <Message />
        <Message />
        <Message />
        <Input />
        <Response />


        <Message />
        <Service />
        <Response />


        <Message />
        <Date />
        <Response />

        <Message />
        <TimePicker />
        <Response />

        <Message />
        <Message />
        <ConfirmButton />

        <Message />
        <Message />
        <Reminder />

    </div>
  )
}
