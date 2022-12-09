import React from 'react';
import imgLeft from '../assets/image-about-dark.jpg';
import imgRight from '../assets/image-about-light.jpg';

const Bottom = () => {
  return (
    <div>
      <div>
        <img src={imgLeft} alt='dark furniture' />
      </div>
      <div>
        <h2>H2 input</h2>
        <p>Paragraph</p>
      </div>
      <div>
        <img src={imgRight} alt='' />
      </div>
    </div>
  );
};

export default Bottom;
