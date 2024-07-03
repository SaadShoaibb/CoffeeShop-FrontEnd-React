import React from 'react';
import {images} from "../../constants"
import SubHeading from "../../components/SubHeading/SubHeading";
import './Header.css';

const Header = () => {

  return(

    <div className='app__header app__wrapper section__padding' id= 'home'>
<div className='app__wrapper_info'>
<SubHeading title ="Chase the Flavoury taste! "/>
<h1 className='app__header-h1'>The Key to Luscious Coffee</h1>
<p className='p__opensans' style={{margin:"2rem 0" }}>Our Coffee is brewed naturally with exotic american beans that leave a unique and great lasting impression on those that consume it! </p>
<button type='button' className='custom__button'>Explore Menu</button>
</div>

<div className='app__wrapper_img'>
<img src={images.cwelcome} alt='header image' />
</div>
    </div>
)
}

export default Header;
