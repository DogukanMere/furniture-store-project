import React from 'react';
// import Hamburger from '../components/Hamburger'
import Navigation from './Navigation';
import hero1Desktop from '../assets/desktop-image-hero-1.jpg';
import hero2Desktop from '../assets/desktop-image-hero-2.jpg';
import hero3Desktop from '../assets/desktop-image-hero-3.jpg';
import hero1Mobile from '../assets/mobile-image-hero-1.jpg';
import hero2Mobile from '../assets/mobile-image-hero-2.jpg';
import hero3Mobile from '../assets/mobile-image-hero-3.jpg';
import leftArrow from '../assets/icon-angle-left.svg';
import rightArrow from '../assets/icon-angle-right.svg';
import arrow from '../assets/icon-arrow.svg';

const text = [
  {
    id: 1,
    imgD: hero1Desktop,
    imgM: hero1Mobile,
    header: 'Discover innovative ways to decorate',
    paragraph:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    id: 2,
    imgD: hero2Desktop,
    imgM: hero2Mobile,
    header: 'We are available all across the globe',
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    imgD: hero3Desktop,
    imgM: hero3Mobile,
    header: 'Manufactured with the best materials',
    paragraph:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];

const Main = () => {
  return (
    <div className='flex flex-col flex-wrap md:flex-row'>
      <div className='relative flex-1 flex justify-center'>
        <Navigation />
        <img
          src={hero1Mobile}
          alt='furniture hero'
          className='block xs:hidden'
        />
        <img
          src={hero1Desktop}
          alt='furniture hero'
          className='hidden xs:block'
        />
        <div className='arrow-buttons absolute right-[0] md:right-[-8rem] bottom-0 flex z-2 border-0 outline-none'>
          <div className='left-arrow w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem] bg-dark text-white flex justify-center items-center cursor-pointer'>
            <img src={leftArrow} alt='' className='h-[1rem] md:h-[1.3rem]' />
          </div>
          <div className='right-arrow w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem] bg-dark text-white flex justify-center items-center cursor-pointer'>
            <img src={rightArrow} alt='' className='h-[1rem] md:h-[1.3rem]' />
          </div>
        </div>
      </div>
      <div className='flex-[0.6] px-[2.5rem] py-[3.5rem] sm:px-[4rem] sm:pb-[5rem]'>
        <h2 className='text-black text-start text-[2.3rem] sm:text-[2.6rem] leading-[1] tracking-tighter font-semibold max-w-[20rem]'>
          Discover innovative ways to decorate
        </h2>
        <p className='text-darkGray text-start mt-[1rem] text-[.9rem] max-w-[24rem] font-medium'>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <a
          href=''
          className='flex justify-start items-center mt-[2rem] flex-nowrap min-w-[310px] text-veryDarkGray'
        >
          <span className='uppercase text-start tracking-[0.7rem]'>
            shop now
          </span>
          <img src={arrow} alt='' className='w-[2.3rem] h-[0.7rem] ml-3' />
        </a>
      </div>
    </div>
  );
};

export default Main;
