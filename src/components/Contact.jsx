import React from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'

const Contact = () => {
    return (
        <div className='bg-primary flex flex-col items-center px-5 py-32 text-secondary'>
            <h2 className='font-bold mb-5 text-center text-3xl md:text-5xl'>
                Let's work together.
            </h2>
            <p className='mb-10 text-center'>
                I'm available for freelance work.
            </p>
            <ul className='flex gap-10 items-center'>
                <li className='h-6 md:h-8 w-6 md:w-8'>
                    <a href="https://www.linkedin.com/in/jheysongar/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className='h-full w-full' />
                    </a>
                </li>
                <li className='h-6 md:h-8 w-6 md:w-8'>
                    <a href="https://github.com/Jgiancarloar?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github className='h-full w-full' />
                    </a>
                </li>
                <li className='h-6 md:h-8 w-6 md:w-8'>
                    <a href="mailto:jgiancarloalvarezr@gmail.com">
                        <Mail className='h-full w-full' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact