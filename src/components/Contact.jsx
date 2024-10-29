import React from 'react'
import { MoveDown } from 'lucide-react'
import { IconBrandLinkedin,IconBrandGithub,IconMail } from '@tabler/icons-react';

const Contact = () => {
  return (
    <div className='py-20 text-white flex flex-col items-center justify-center max-w-5xl mx-auto'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5'>Let's work together</h2>
      <div className='flex items-center mb-10'>
        <div className='w-20 h-8 bg-gray-200/20'></div>
        <button className='-ml-16 flex gap-2 items-center'>
          <p className='font-semibold leading-none'>CONTACT ME</p>
          <MoveDown strokeWidth={1} />
        </button>
      </div>
      <div className='flex space-x-10'>
        <IconBrandLinkedin stroke={1} size={35} />
        <IconBrandGithub stroke={1} size={35} />
        <IconMail stroke={1} size={35} />
      </div>
    </div>
  )
}

export default Contact