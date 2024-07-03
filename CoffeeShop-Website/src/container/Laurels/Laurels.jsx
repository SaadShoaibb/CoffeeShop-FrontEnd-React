import React from 'react';
import { SubHeading,MenuItem } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle} }) => (
<div className='app__laurels-awards-card'>
  <img src={imgUrl} alt='awards'></img>
  <div className='app__laurels-awards-card-content'>
<p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
<p className='p__cormorant' >{subtitle}</p>

  </div>
</div>
)

const Laurels = () => {
  
  return(
  <div className='app__bg app__wrapper section__padding ' id='awards'>
    <div className='app__wrapper-info'>
      <SubHeading title="Awards & Recognition"/>
      <h1 className='headtext__cormorant'>
        Our Laurels
      </h1>
      <div className='app__laurels-awards'>
        {data.awards.map ((award) => <AwardCard award={award} key={award.title} />)}
      </div>

  
      <div className='app__wrapper-img'>
        <img src={images.rewards} alt='laurels'></img>

      </div>

    </div>

  </div>
);
}
export default Laurels;
