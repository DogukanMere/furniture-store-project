import React from 'react';
import logo from '../assets/logo.svg';

const Navigation = () => {
  return (
    <nav className='absolute top-[2rem] left-[1rem] z-[2] w-full'>
      <div className='flex relative justify-center lg:justify-start w-full'>
        <div className='block lg:flex'>
          {/* Hamburger */}
          <div className='absolute left-[1rem] top-0 block lg:hidden text-white'>
            NavH
          </div>
          {/* Logo */}
          <div className='lg:mr-10 lg:ml-[4rem] ml-0'>
            <img src={logo} alt='logo' className='' />
          </div>
          {/* Menu Items */}
        </div>
        <div>
          <ul className='gap-[1rem] justify-between text-white font-normal hidden lg:flex'>
            <li>
              <a href=''>home</a>
            </li>
            <li>
              <a href=''>shop</a>
            </li>
            <li>
              <a href=''>about</a>
            </li>
            <li>
              <a href=''>contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
