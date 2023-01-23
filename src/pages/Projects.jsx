import React from 'react';
import ProjectCards from '../components/ProjectCard';
import TopHeading from '../components/TopHeading';
import poster1 from '../assets/project-1.png'
import poster2 from '../assets/project-2.png'
import poster3 from '../assets/project-3.png'
import poster4 from '../assets/project-4.png'
import poster5 from '../assets/project-5.png'

const Projects = () => {
    return (
            <div className='flex justify-center flex-wrap mt-5  '>
            <ProjectCards projectTitle='project 1' poster={poster1}/>
            <ProjectCards projectTitle='project 2' poster={poster2}/>
            <ProjectCards projectTitle='project 3' poster={poster3}/>
            <ProjectCards projectTitle='project 4' poster={poster4}/>
            <ProjectCards projectTitle='project 5' poster={poster5}/>
            <ProjectCards projectTitle='project 6' poster={poster1}/>
            <ProjectCards projectTitle='project 7' poster={poster2}/>
            <ProjectCards projectTitle='project 8' poster={poster3}/>
        </div>
    )
}

export default Projects