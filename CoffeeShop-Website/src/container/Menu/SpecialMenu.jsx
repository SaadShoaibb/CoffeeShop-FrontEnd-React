import React from 'react';
import{images, data} from '../../constants';
import { SubHeading,MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => {

return(
<div className='app__specialMenu flex__center section__padding' id='menu'>
<div className='app__specialMenu-title'>
<SubHeading title='Menu that excites you'/>
<h1 className='headtext__cormorant'>Most Popular</h1>
</div>

<div className='app__specialMenu-menu'>
  <div className='app__specialMenu-menu_hot'>
<p className='app__specialMenu-menu_heading'>Hot Coffee & Drinks</p>
<div className='app__specialMenu-menu_items'>
  {data.hots.map ((hot,index) =>(
    <MenuItem key={hot.title + index} title={hot.title} price={hot.price} tags={hot.tags} />
  ))}
</div>
  </div>

<div className='app__specialMenu-menu_img'>
  <img src= {images.coffee}/>
</div>

<div className='app__specialMenu-menu_cold'>
<p className='app__specialMenu-menu_heading'>Cold Coffee & Drinks</p>
<div className='app__specialMenu-menu_items'>
  {data.colds.map ((cold,index) =>(
    <MenuItem key={cold.title + index} title={cold.title} price={cold.price} tags={cold.tags} />
  ))}
</div>
  </div>
</div>
<div style={{marginTop:'15px'}}>
<button type='button' className='custom__button'>View More</button>
</div>
</div>


)
}

export default SpecialMenu;
