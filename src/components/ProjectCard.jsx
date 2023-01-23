import React from 'react'
import Button from './Button';

const ProjectCards = (props) => {
    const {poster,title} = props;
    return (
        <div>
            <img src={poster} alt="project-img" className='w-96 pr-2 pl-2'/>
            <button className='bg-blue-600 text-white w-full mt-1 pt-1 pb-1 pr-5 pl-5'>{title}</button>
        </div>
    )
}

export default ProjectCards;