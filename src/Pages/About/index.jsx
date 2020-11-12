import React from 'react';
import './index.css'
import Landing from '../../Components/Landing';
import Text from '../../Components/Text';
import {POST_TEXT} from '../../Constants/strings';
import SocialMedia, {FACEBOOK, INSTAGRAM, TWEETER} from "../../Components/SocialMedia";

const About = () => {
    return (
        <div>
            <Landing socialMedia={false}/>
            <div className='firstParagraph'>
                <Text text={POST_TEXT}/>
                <Text text={POST_TEXT}/>
                <div className='medias'><SocialMedia medias={[FACEBOOK, TWEETER, INSTAGRAM]}/></div>
            </div>
        </div>
    );
};

export default About;