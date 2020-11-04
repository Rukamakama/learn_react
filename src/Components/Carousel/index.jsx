import React from 'react';
import './index.css'
import MyAvatar from '../Landing/avatar.jpg'
import MyPost1 from '../Post/ai.jpg'
import MyPost2 from '../Post/ai2.jpg'
import DevWorld from '../Landing/dev_world.jpg'
import SocialMedia, {FACEBOOK, INSTAGRAM, TWEETER} from "../SocialMedia";

const Carousel = () => {
    return (
        <div className='carousel'>
            <div className='images'>
                <img className='image' src={MyAvatar} alt='avatar'/>
                <img className='image' src={MyPost1} alt='ai'/>
                <img className='image' src={DevWorld} alt='dev'/>
                <img className='image' src={MyPost2} alt='ai'/>
            </div>
            <div className='carouselMedias'><SocialMedia medias={[FACEBOOK, TWEETER, INSTAGRAM]}/></div>
        </div>
    );
};

export default Carousel;