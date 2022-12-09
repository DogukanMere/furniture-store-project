import React from 'react';
import imgLeft from '../assets/image-about-dark.jpg';
import imgRight from '../assets/image-about-light.jpg';

const Bottom = () => {
  return (
    <div className='flex flex-col flex-wrap md:flex-row justify-start items-start md:items-center min-w-[360px]'>
      <div className=' flex-[1] '>
        <img src={imgLeft} alt='dark furniture' />
      </div>
      <div className='flex-[1] px-[2.5rem] py-[3.5rem] md:px-[2.5rem] md:py-[.2rem]'>
        <h2 className='uppercase text-black text-start text-[.8rem] lg:text-[] tracking-[.3rem] font-semibold'>
          About our furniture
        </h2>
        <p className='text-darkGray text-start mt-[1rem] md:mt-[.5rem] lg:text-[.9rem] text-[0.8rem] md:text-[.6rem] font-medium max-w-[24rem]'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className='flex-1'>
        <img src={imgRight} alt='' />
      </div>
    </div>
  );
};

export default Bottom;
