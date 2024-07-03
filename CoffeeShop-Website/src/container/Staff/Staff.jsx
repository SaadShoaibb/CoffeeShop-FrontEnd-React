import React from 'react';
import { images } from '../../constants';
import  {SubHeading}  from '../../components';
import './Staff.css';

const Staff = () => (
  <div className='app__bg section__padding app__wrapper'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src= {images.staff} alt='staff'></img>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Founder's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__staff-content'>
        <div className='app__staff-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>our top priority is...</p>
        </div>
        <p className='p__opensans'>to provide top notch coffee and service</p>
      </div>

<div className='app__staff-sign'>
  <p>Kevin Luo</p>
  <p className='p__opensans'>Owner & Founder</p>
  <img src={images.sign} alt='sign'></img>
</div>
    </div>
  </div>
);

export default Staff;
