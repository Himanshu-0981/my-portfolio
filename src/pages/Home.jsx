import React from 'react'; 
import mainImg from '../assets/main_pic.png'
import Footer from './Footer';

const Home = () => {
    return (
        <div className='flex justify-center items-center mt-32 mb-32'>
            <div className='font-semibold text-4xl text-[#142a36] text-center sm:mr-14 sm:text-start '>
                <div className='mt-1'>Hi, </div>
                <div className='mt-2'>i am <span className='text-blue-600'>Marvin</span></div>
                <div className='mt-3'>Web Developer</div>
                <button className='  text-white bg-blue-600 pt-1 pb-1 pr-3 pl-3 mt-5 rounded font-normal text-xl hover:bg-blue-500 transition-all	'>Contact</button>
            </div>
            <div className='hidden sm:block sm:ml-14'>
               <img src={mainImg} alt="Img" /> 
            </div>
        </div> 
    )
}

export default Home;