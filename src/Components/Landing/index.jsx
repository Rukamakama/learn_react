import React from 'react';
import './index.css'
import MyIcon from './avatar.jpg'
import Title, {SIZE_BIG} from "../Title";
import Text from "../Text";
import {BLOG_TITLE, SLOGAN} from "../../strings";
import SocialMedia, {FACEBOOK, INSTAGRAM, TWEETER} from "../SocialMedia";

const Landing = () => {
    return (
        <div className='landing'>
            <div className='landingContent'>
                <img className='avatar' src={MyIcon} alt='My Icon'/>
                <div className='landingText'>
                    <Title size={SIZE_BIG} text={BLOG_TITLE}/>
                    <Text text={SLOGAN}/>
                    <SocialMedia medias={[FACEBOOK, INSTAGRAM, TWEETER]}/>
                </div>
            </div>

        </div>
    );
};

export default Landing;