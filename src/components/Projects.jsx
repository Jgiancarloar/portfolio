import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {

  return (
    <div className='bg-secondary py-32'>
      <div className='max-w-7xl mb-20 mx-auto px-5 md:px-10 lg:px-0'>
        <h2 className='font-bold md:text-center text-4xl md:text-5xl'>
          Turning Ideas Into Interfaces
        </h2>
      </div>
      <div className='border-t border-neutral-300'>
        {
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects