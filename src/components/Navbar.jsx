import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'

const Navbar = () => {

  const navLinkStyles = ({isActive}) => {
    return {
      color : isActive ? 'rgb(37 99 235)' : '',
      textDecoration : isActive ? 'underline' : 'none',
      textUnderlineOffset : isActive ? '8px' : 'none',
      textDecorationThickness : isActive ? '2px' : 'none',
    }
  }

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pt-3 pb-3'>
      <nav className='text-center flex justify-around items-center  sm:flex sm:justify-around p-1 '>
        <div className='font-medium text-[#142a36] cursor-pointer'>
          Marvin
        </div>
        <div className={`absolute top-0 right-0 text-center ${!toggle ? ' -translate-y-48 transition-transform' : 'translate-y-0 transition-transform'}  w-full sm:w-48 sm:relative sm:inline-block sm:-translate-y-0 }`}>
          <ul className='text-white flex flex-col sm:flex-row pb-5 pt-5 font-medium  sm:pb-0 sm:pt-0 sm:space-x-6 bg-[#142a36] sm:text-[#142a36] sm:bg-white '>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink> 
            <NavLink style={navLinkStyles} to='/projects'>Projects</NavLink>
            <NavLink style={navLinkStyles} to='/contact'>Contact</NavLink> 
          </ul>
        </div>
        <div className='flex sm:hidden z-10' onClick={handleToggle}>
          {!toggle ? <AiOutlineMenu className='text-[#142a36]'/> : <AiFillCloseCircle className='text-white'/>}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;