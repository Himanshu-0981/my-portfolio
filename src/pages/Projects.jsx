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
        <>
           <TopHeading title='PROJECTS'/>
           <div className='flex justify-center flex-col sm:flex sm:flex-row '>
            <ProjectCards poster={poster1} title='click here'/>
            <ProjectCards poster={poster2} title='click here'/>
            <ProjectCards poster={poster3} title='click here'/>
            <ProjectCards poster={poster4} title='click here'/>
            <ProjectCards poster={poster5} title='click here'/>
           </div>   
        </>
    )
}

export default Projects