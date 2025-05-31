import React from 'react'

const Hero = () => {
    return (
        <div className='bg-primary flex px-5 md:px-10 lg:px-0 py-32'>
            <div className='flex flex-col gap-10 items-center justify-center max-w-7xl mx-auto text-secondary'>
                <div className='flex font-bold gap-5 items-center justify-center text-4xl md:text-6xl w-full'>
                    <div className='border border-white flex flex-col h-fit items-center gap-5 p-5'>
                        <div className='w-fit'>P</div>
                        <div className='w-fit'>T</div>
                        <div className='w-fit'>L</div>
                    </div>
                    <div className='border border-white flex flex-col h-fit items-center gap-5 px-5 py-20'>
                        <div className='w-fit'>O</div>
                        <div className='w-fit'>F</div>
                        <div className='w-fit'>I</div>
                    </div>
                    <div className='border border-white flex flex-col h-fit items-center gap-5 p-5'>
                        <div className='w-fit'>R</div>
                        <div className='w-fit'>O</div>
                        <div className='w-fit'>O</div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full'>
                    <h1 className='font-bold mb-5 text-center md:text-left text-3xl md:text-6xl lg:text-8xl'>Frontend Developer</h1>
                    <p className='text-center text-lg md:text-2xl'>Hi, I'm Jheyson Alvarez</p>
                </div>
            </div>
        </div>
    )
}

export default Hero