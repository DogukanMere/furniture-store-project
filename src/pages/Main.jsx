import React from 'react'
import hero1Desktop from "../assets/desktop-image-hero-1.jpg"
import hero2Desktop from "../assets/desktop-image-hero-2.jpg"
import hero3Desktop from "../assets/desktop-image-hero-3.jpg"
import hero1Mobile from "../assets/mobile-image-hero-1.jpg"
import hero2Mobile from "../assets/mobile-image-hero-2.jpg"
import hero3Mobile from "../assets/mobile-image-hero-3.jpg"


const text = [
  {
    id: 1,
    imgD: hero1Desktop,
    imgM: hero1Mobile,
    header: 'Discover innovative ways to decorate',
    paragraph: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    id: 2,
    imgD: hero2Desktop,
    imgM: hero2Mobile,
    header: 'We are available all across the globe',
    paragraph: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
  },
  {
    id: 3,
    imgD: hero3Desktop,
    imgM: hero3Mobile,
    header: 'Manufactured with the best materials',
    paragraph: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  },
]

const Main = () => {
  return (
    <div>
      <div className='relative'>
        <img src={hero1Mobile} alt="furniture hero" className='block xs:hidden'/>
        <img src={hero1Desktop} alt="furniture hero" className='hidden xs:block'/>
        <div className='arrow-buttons absolute right-0 bottom-0 flex z-2 border-0 outline-none'>
          <div className='left-arrow w-[3rem] h-[3rem] bg-dark text-white flex justify-center items-center'>L</div>
          <div className='right-arrow w-[3rem] h-[3rem] bg-dark text-white flex justify-center items-center'>R</div>
        </div>
      </div>
      <div>
        <h2>Discover innovative ways to decorate</h2>
        <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
        <a href=""><span className='uppercase'>shop now</span><i>--arrow</i></a>
      </div>
    </div>
  )
}

export default Main