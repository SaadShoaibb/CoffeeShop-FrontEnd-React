import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook,FiTwitter,FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <Newsletter/>
    <div className='app__footer-links'>
      <div className='app__footer-links-contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Gulzar-e-Hijri, Scheme 33, Karachi, Pakistan</p>
        <p className='p__opensans'>+92 3151103929</p>
        <p className='p__opensans'>binshoaibsaad@gmail.com</p>
      </div>
      <div className='app__footer-links-logo'>
        <img src={images.galaxys} alt='footer logo'></img>
        <p className='p__opensans'>"A Coffee a day keeps the laziness away"</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:"15"}}></img>
        <div className='app__footer-links-icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className='app__footer-links-work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>10:00 a.m. - 12:00 a.m. </p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>08:00 a.m. - 02:00 a.m.</p>

      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Galaxys. All Rights reserved</p>
    </div>

  </div>
);

export default Footer;
