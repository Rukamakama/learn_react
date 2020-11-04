import React, {Component} from 'react';
import './index.css'
import Header from "../../Components/Header";
import {POST_OWNER, STR_ABOUT, STR_POST} from "../../strings";
import Post from "../../Components/Post";
import SocialMedia, {FACEBOOK, INSTAGRAM, TWEETER} from "../../Components/SocialMedia";
import PostFrom from "../../Components/PostForm";

class CreatePost extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <Header name={POST_OWNER} navItems={[STR_ABOUT, STR_POST]}/>
                <div className='landingImage'/>
                <PostFrom/>
                <Post revert={false}/>
                <div className='bottomMedia'><SocialMedia medias={[FACEBOOK, TWEETER, INSTAGRAM]}/></div>
            </div>
        );
    }
}

export default CreatePost;