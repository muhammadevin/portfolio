'use client'

import React from 'react'
import { ExpCard, ExpDetail } from '@/components'
import { useState } from 'react';

const Experience = ({ experience }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleModal = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className='flex flex-col w-full md:w-3/5 items-center justify-center text-center gap-6'>
      <div className='flex items-center justify-center p-3 rounded-lg'>
        <h4 className='text-3xl font-sans'>my WORKS</h4>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-1 justify-items-center md:gap-6 w-full px-8 sm:px-0'>
        {experience.map((item) => (
          <div className='flex justify-center items-center h-fit' key={item.id}>
            <ExpCard experience={item} handleModal={() => handleModal(item.id)}/>
            {selectedItemId === item.id ? (
              <ExpDetail key={item.id} experience={item} handleModal={() => handleModal(null)} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience