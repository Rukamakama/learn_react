import React from 'react';
import Title, {SIZE_SMALL} from "../Title";
import {POST_TEXT, POST_TITLE} from "../../strings";
import Text from "../Text";
import SocialMedia, {FACEBOOK, INSTAGRAM} from "../SocialMedia";
import './index.css'
import PostImage1 from './ai.jpg'
import PostImage2 from './ai2.jpg'

const Post = ({revert}) => {
    return (
        !revert ?
            <div className='postView'>
                <img src={PostImage2} className='postImage' alt='ai'/>
                <div className='space'/>
                <div className='postContent'>
                    <Title size={SIZE_SMALL} text={POST_TITLE}/>
                    <Text text={POST_TEXT}/>
                    <SocialMedia medias={[FACEBOOK, INSTAGRAM]}/>
                </div>
            </div> :
            <div className='postView'>
                <div className='postContent'>
                    <Title size={SIZE_SMALL} text={POST_TITLE}/>
                    <Text text={POST_TEXT}/>
                    <SocialMedia medias={[FACEBOOK, INSTAGRAM]}/>
                </div>
                <div className='space'/>
                <img src={PostImage1} className='postImage' alt='ai'/>
            </div>
    );
};

export default Post;