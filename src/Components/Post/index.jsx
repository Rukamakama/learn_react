import React, {useState} from 'react';
import Title, {SIZE_SMALL} from "../Title";
import {POST_TEXT, POST_TITLE} from "../../Constants/strings";
import Text from "../Text";
import SocialMedia, {FACEBOOK, INSTAGRAM} from "../SocialMedia";
import './index.css'
import PostImage1 from './ai.jpg'

const PostDisplay = ({
                  revert = true,
                  socialMedia = true,
                  post = {
                      title: POST_TITLE, description: POST_TEXT, photo: PostImage1
                  }
              }) => {

    return (
        <div className='postView'>
            <img src={post.photo}
                 className={revert ? 'postImage1' : 'postImage2'}
                 alt='ai'/>
            <div className='postContent'>
                <Title text={post.title}/>
                <Text text={post.description}/>
                {
                    socialMedia ?
                        <SocialMedia medias={[FACEBOOK, INSTAGRAM]}/> :
                        null
                }
            </div>
        </div>
    );
};

export default PostDisplay;