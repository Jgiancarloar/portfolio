import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='w-full py-20 flex flex-col items-center gap-10'>
            <h2 className='text-2xl font-semibold'>My projects</h2>
            <div className='flex flex-col sm:divide-y sm:border-y-2 w-full'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects