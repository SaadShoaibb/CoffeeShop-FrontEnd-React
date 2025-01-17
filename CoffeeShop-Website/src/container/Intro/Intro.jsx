import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { drinking } from '../../constants';
import './Intro.css';

const Intro = () => {
  
  const [playVideo, setPlayVideo] = React.useState();
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo)=>!prevPlayVideo);
    if(playVideo){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
    }
  

  return(
  <div className='app__video'>
    <video src={drinking} type='video/mp4' loop controls = {false} ref={vidRef} muted/>

    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay-circle flex__center' onClick={handleVideo}>

        {playVideo
         ? (<BsPauseFill color='#fff' fontSize={30}/> )
         : <BsFillPlayFill color='#fff' fontSize={30}/>}

      </div>
    </div>
  </div>

  
);
}
export default Intro;
