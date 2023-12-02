import React, { useState } from 'react'

const Nav = () => {

    const [navBarActive, setNavBarActive] = useState(false);
    const navHandle= () =>{
        setNavBarActive(!navBarActive);
    }
  return (
    <div className='hamberger-menu flex flex-col gap-2  w-8 relative'
    data-nav-active={navBarActive}
    onClick={()=>navHandle()} 
    >
        <span className='border-[2px] border-black'></span>
        <span className='border-[2px] border-black'></span>
        <span className='border-[2px] border-black'></span>
    </div>
  )
}

export default Nav