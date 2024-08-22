import React from 'react'

export default function ConfirmButton() {
  return (
    <div className='flex flex-row gap-4 justify-center'>
        <div className='py-8 px-4 bg-gray-200 rounded-xl'>
            <p className='text-black'>Cancelar</p>
        </div>

        <div className='py-8 px-4 bg-teal-600 rounded-xl'>
            <p className='text-white'>Confirmar</p>
        </div>

    </div>
  )
}
