import React from 'react'

const ProjectCard = ({ project, index }) => {
    return (
        <div className='border-b border-neutral-300'>
            <div className='flex flex-col md:flex-row md:gap-5 lg:gap-0'>
                <div className="relative w-full h-80 md:h-auto md:order-1 flex  items-center justify-center">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer peer group bg-primary lg:bg-transparent border border-primary font-bold px-5 py-3 md:text-lg w-fit z-50 relative"
                    >
                        <div className="absolute bg-primary h-full top-0 left-0 w-0 group-hover:w-full transition-all duration-300"></div>
                        <span className="text-secondary lg:text-primary group-hover:text-secondary relative transition-colors duration-300">
                            View Project
                        </span>
                    </a>
                    <img
                        src={project.image}
                        alt=""
                        className="absolute right-0 object-cover object-top h-full w-full lg:w-0 peer-hover:w-full transition-all duration-500"
                    />
                </div>

                <div className='p-5 md:p-10 lg:px-5 md:py-10 lg:py-20 w-full'>
                    <div className='max-w-[640px] ml-auto relative'>
                        <span className='absolute font-black hidden md:block text-neutral-300 text-7xl lg:text-9xl left-1/5 -top-5 lg:-top-10 z-0'>{(index + 1).toString().padStart(2, '0')}</span>
                        <div className='flex items-center gap-2 mb-5 lg:mb-10 relative z-10'>
                            <span className='font-semibold hidden md:block text-xl'>{(index + 1).toString().padStart(2, '0')}</span>
                            <h3 className='font-bold text-xl md:text-2xl lg:text-5xl'>{project.name}</h3>
                        </div>
                        <p className='mb-5 lg:mb-10 text-gray-500 text-lg lg:text-xl relative z-10'>
                            {project.description}
                        </p>
                        <div className='flex flex-wrap gap-5'>
                            {
                                project.technologies.map((tech, index) => (
                                    <div className='bg-primary text-secondary px-2 py-1 w-fit'>
                                        {tech}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard