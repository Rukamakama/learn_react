import React from 'react';
import './index.css'
import MyIcon from './avatar.jpg'
import Title, {SIZE_BIG} from "../Title";
import Text from "../Text";
import {BLOG_TITLE, SLOGAN} from "../../Constants/strings";
import SocialMedia, {FACEBOOK, INSTAGRAM, TWEETER} from "../SocialMedia";

const Landing = ({socialMedia = true}) => {
    return (
        <div className='landing'>
            <div className='landingContent'>
                <img className='avatar' src={MyIcon} alt='My Icon'/>
                <div className='landingText'>
                    <Title size={SIZE_BIG} text={BLOG_TITLE}/>
                    <Text text={SLOGAN}/>
                    {
                        socialMedia ?
                            <SocialMedia medias={[FACEBOOK, INSTAGRAM, TWEETER]}/>
                            : null
                    }
                </div>
            </div>

        </div>
    );
};

export default Landing;