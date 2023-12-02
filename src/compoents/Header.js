import React from 'react';
import { logosvg } from '../images';
import Nav from './Nav';


const Header = () => {
  return (
    <div className='flex p-4 align-top justify-between shadow-xl shadow-transparent relative'>
        <div className='hero-img'>
            <img className='w-[100px] h-[50px] ' src={logosvg}  alt='logo'/>
        </div>
        <nav className='nav flex items-center '>
          <div>
           
          </div>
          <Nav />
            {/* <ul className='flex flex-col align-middle '>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul> */}
        </nav>
    </div>
  )
}

export default Header