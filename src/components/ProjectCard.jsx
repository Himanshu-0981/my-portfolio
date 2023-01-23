import React from 'react'
import Button from './Button';

const ProjectCards = (props) => {
    const {poster,projectTitle} = props;
    return (
        <div className='flex justify-center flex-wrap mt-5    '>
               <div className='p-2'>
               <img src={poster} alt="" className=' h-64 rounded-lg'/>
                <p>{projectTitle}</p>
                <button className='bg-blue-600 p-1 w-full text-white rounded'>Visit Site </button>
               </div>
            </div>  
    )
}

export default ProjectCards;